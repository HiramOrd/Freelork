import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AllUsersComponent} from '../all-users/all-users.component';
import {HttpClientService} from '../../../../services/http-client.service';
import {UtilitiesService} from '../../../../utilities/utilities.service';
import {ToastService} from '../../../../utilities/toast.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  @Input() edit = false;
  @Output() companyDataOut: EventEmitter<FormGroup>;
  @Output() imageCompany: EventEmitter<string>;

  @ViewChild(AllUsersComponent, {static: true}) public registerFormComponent: AllUsersComponent;
  companyForm: FormGroup;

  constructor(
    private router: Router,
    private el: ElementRef,
    private httpClientService: HttpClientService,
    private utilitiesService: UtilitiesService,
    private toastService: ToastService
  ) {
  }

  ngOnInit(): void {
    this.companyForm = new FormGroup({
      sizeCompany: new FormControl(null, [Validators.required]),
      serviceType: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      hrName : new FormControl('Nombre HR', [Validators.required]),
      hrLastname : new FormControl('Apellido HR', [Validators.required]),
      hrPhone : new FormControl('9981220011', [Validators.required]),
      hrEmail : new FormControl('correoRH@gmail.com', [Validators.required]),
      userEntity: this.registerFormComponent.createFormGroup(),
    });
  }

  companySubmit(): void {
    console.log(this.companyForm.getRawValue());
    (this.companyForm.valid) ? this.postCompany() : this.errorForm();
  }

  postCompany() {
    if (this.edit) {
      this.companyDataOut.emit(this.companyForm);
    } else {
      console.log(this.companyForm.getRawValue());
      this.httpClientService.registerCompany(this.companyForm.getRawValue()).subscribe( () => {
        this.toastService.show('¡Se ha registrado exitosamente!' , { classname: 'bg-success text-white'});
        this.router.navigate(['/guest/login']);
      }, (error) => {
        console.log(error);
        this.toastService.show('Error en el servidor, intenta más tarde' , { classname: 'bg-danger text-white'});
      });
    }
  }

  errorForm() {
    this.companyForm.markAllAsTouched();
    for (const key of Object.keys(this.companyForm.controls)) {
      if (this.companyForm.controls[key].invalid) {
        const invalidControl = this.el.nativeElement.querySelector('[formcontrolname="' + key + '"]');
        invalidControl.focus();
        break;
      }
    }
  }

}
