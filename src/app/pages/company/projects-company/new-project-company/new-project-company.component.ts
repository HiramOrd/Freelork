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
  serviceData;
  public projectCompanyForm: FormGroup;
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
    this.projectCompanyForm = new FormGroup({
      // NULL Default
      id: new FormControl(0, []),
      name: new FormControl(null, [Validators.required]),
      objectives: new FormControl(null),
      idUser: new FormControl(this.utilitiesService.getId(), [Validators.required]),
      file: new FormControl(null, [])
    });

    const routeParams = this.route.snapshot.paramMap;
    if (routeParams.get('id')) { this.getProject(routeParams.get('id')); }
  }

  get file() {
    return this.projectCompanyForm.get('file') as FormControl;
  }

  setImage(event) {
    this.file.setValue(event?.value ?? null);
  }

  validateForm() {
    (this.projectCompanyForm.valid) ?
      this.postTask() :  this.errorForm();
  }
  getProject(id) {
    this.httpClientService.getCompanyProjectToPost(id).subscribe(response => {
      console.log(response);
      this.serviceData = response;
      this.projectCompanyForm.get('id').setValue(id);
      this.projectCompanyForm.get('name').setValue(this.serviceData.name);
      this.projectCompanyForm.get('objectives').setValue(this.serviceData.objectives);
      this.projectCompanyForm.setControl( 'imageId', new FormControl( this.serviceData.imageId));
      this.projectCompanyForm.setControl( 'imageUrl', new FormControl( this.serviceData.imageUrl));

    }, (error) => {
      console.warn(error);
      this.toastService.show('Error en el servidor, intenta mas tarde' , { classname: 'bg-danger text-white'});
    } );
  }

  postTask() {
    this.httpClientService.postProjects(this.projectCompanyForm.getRawValue()).subscribe(response => {
      this.toastService.show('Guardado Exitosamente' , { classname: 'bg-success text-white'});
      this.router.navigate(['/dash/comp/projects']);
    }, (error) => {
      console.warn(error);
      this.toastService.show('Error en el servidor, intenta mas tarde' , { classname: 'bg-danger text-white'});
    } );
  }

  deleteEditImage(event) {
    if (this.projectCompanyForm.get('imageUrl')) {
      this.projectCompanyForm.get('imageUrl').setValue(event);
    }
  }

  errorForm() {
    this.projectCompanyForm.markAllAsTouched();
    for (const key of Object.keys(this.projectCompanyForm.controls)) {
      if (this.projectCompanyForm.controls[key].invalid) {
        const invalidControl = this.el.nativeElement.querySelector('[formcontrolname="' + key + '"]');
        invalidControl.focus();
        break;
      }
    }
  }

}
