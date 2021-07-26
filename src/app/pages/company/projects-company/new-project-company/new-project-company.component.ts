import {Component, ElementRef, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UtilitiesService} from '../../../../utilities/utilities.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClientService} from '../../../../services/http-client.service';
import {ToastService} from '../../../../utilities/toast.service';

@Component({
  selector: 'app-new-project-company',
  templateUrl: './new-project-company.component.html',
  styleUrls: ['./new-project-company.component.css']
})
export class NewProjectCompanyComponent implements OnInit {
  public registerTaskForm: FormGroup;
  public imageShow;
  private origin: string;
  public today = Date.now();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpClientService: HttpClientService,
    private utilitiesService: UtilitiesService,
    private el: ElementRef,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this.registerTaskForm = new FormGroup({
      // NULL Default
      id: new FormControl(0, []),
      status: new FormControl(1, []),
      title: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      description: new FormControl(null, []),
      file: new FormControl(null, [])
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
      this.router.navigate(['/dash/comp/projects']);
    }, (error) => {
      console.warn(error);
      this.toastService.show('Error en el servidor, intenta mas tarde' , { classname: 'bg-danger text-white'});
      this.router.navigate(['/dash/comp/projects']);
    } );
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

}
