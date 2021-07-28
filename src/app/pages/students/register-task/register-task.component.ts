import {Component, ElementRef, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClientService} from '../../../services/http-client.service';
import {UtilitiesService} from '../../../utilities/utilities.service';
import {ToastService} from '../../../utilities/toast.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-register-task',
  templateUrl: './register-task.component.html',
  styleUrls: ['./register-task.component.css']
})
export class RegisterTaskComponent implements OnInit {
  public registerTaskForm: FormGroup;
  public projects;
  public imageShow;
  private origin: string;
  public today = Date.now();

  serviceData;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpClientService: HttpClientService,
    private utilitiesService: UtilitiesService,
    private el: ElementRef,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this.getProjects();
    this.registerTaskForm = new FormGroup({
      // NULL Default
      id: new FormControl(0, []),
      status: new FormControl(2, []),
      idUser: new FormControl(this.utilitiesService.getId(), [Validators.required]),
      dateRegister: new FormControl(formatDate(new Date(), 'yyyy-MM-dd', 'en'), [Validators.required]),
      idProject: new FormControl(null, [Validators.required]),
      title: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      timeRegister: new FormControl(null, [Validators.required]),
      description: new FormControl(null, []),
      file: new FormControl(null, [])
    });

    this.route.queryParams.subscribe( params => {
      (params.origin) ? this.origin = params.origin : this.origin = '0';
      if (params.id) { this.getTask(params.id); }
    });
  }

  getTask(id: number) {
    this.httpClientService.getTask(id).subscribe( response => {
      console.log(response);
      this.serviceData = response;
      this.registerTaskForm.get('id').setValue(this.serviceData.id);
      this.registerTaskForm.get('dateRegister').setValue(formatDate(this.serviceData.dateRegister, 'yyyy-MM-dd', 'en'));
      this.registerTaskForm.get('idProject').setValue(this.serviceData.idProject);
      this.registerTaskForm.get('title').setValue(this.serviceData.title);
      this.registerTaskForm.get('timeRegister').setValue(this.serviceData.timeRegister);
      this.registerTaskForm.get('description').setValue(this.serviceData.description);
      this.registerTaskForm.setControl( 'imageId', new FormControl( this.serviceData.imageId));
      this.registerTaskForm.setControl( 'imageUrl', new FormControl( this.serviceData.imageUrl));
      console.log(this.registerTaskForm.getRawValue());
      }, error => {
      console.warn(error);
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
    });
  }

  get file() {
    return this.registerTaskForm.get('file') as FormControl;
  }

  setImage(event) {
    this.file.setValue(event?.value ?? null);
  }


  validateForm() {
    (this.registerTaskForm.valid) ?
      this.postTask() :  this.errorForm();
  }

  postTask() {
    console.log(this.registerTaskForm.getRawValue());
    this.httpClientService.postTask(this.registerTaskForm.getRawValue()).subscribe( response => {
      this.toastService.show('Guardado Exitosamente' , { classname: 'bg-success text-white'});
      this.return();
    }, (error) => {
      console.warn(error);
      this.toastService.show('Error en el servidor, intenta mas tarde' , { classname: 'bg-danger text-white'});
    } );
  }

  return(): void {
    let route = '/dash/std/register';
    if (this.origin === '1') {
      route = '/dash/std/home';
    }
    this.router.navigate([route]).then(() => {} );
  }
  errorForm() {
    this.registerTaskForm.markAllAsTouched();
    for (const key of Object.keys(this.registerTaskForm.controls)) {
      if (this.registerTaskForm.controls[key].invalid) {
        const invalidControl = this.el.nativeElement.querySelector('[formcontrolname="' + key + '"]');
        invalidControl.focus();
        break;
      }
    }
  }

  deleteEditImage(event) {
    if (this.registerTaskForm.get('imageUrl')) {
      this.registerTaskForm.get('imageUrl').setValue(event);
    }
    console.log(this.registerTaskForm.getRawValue());
  }

  getProjects() {
    this.httpClientService.getStudentProjects(this.utilitiesService.getId()).subscribe( response => {
      this.projects = response;
    }, (error) => {
      console.warn(error);
      this.toastService.show('Error en el servidor, intenta mas tarde' , { classname: 'bg-danger text-white'});
    } );
  }
}
