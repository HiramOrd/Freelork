import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AllUsersComponent} from '../forms-register/all-users/all-users.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClientService} from '../../../services/http-client.service';
import {UtilitiesService} from '../../../utilities/utilities.service';
import {ToastService} from '../../../utilities/toast.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @Input() edit = false;
  @Output() adminDataOut: EventEmitter<FormGroup>;
  @Output() imageAdmin: EventEmitter<string>;

  @ViewChild(AllUsersComponent, {static: true}) public registerFormComponent: AllUsersComponent;
  adminForm: FormGroup;

  constructor(
    private router: Router,
    private el: ElementRef,
    private httpClientService: HttpClientService,
    private utilitiesService: UtilitiesService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {

    this.adminForm = new FormGroup({
      userEntity: this.registerFormComponent.createFormGroup(),
    });
  }

  teachersSubmit(): void {
    console.log(this.adminForm.getRawValue());
    (this.adminForm.valid) ? this.postAdmin() : this.adminForm.markAllAsTouched();
  }

  postAdmin() {
    if (this.edit) {
      this.adminDataOut.emit(this.adminForm);
    } else {
      console.log(this.adminForm.getRawValue());
      this.httpClientService.registerAdmin(this.adminForm.getRawValue()).subscribe( () => {
        this.toastService.show('¡Se ha registrado exitosamente!' , { classname: 'bg-success text-white'});
        this.router.navigate(['/guest/login']);
      }, (error) => {
        console.log(error);
        this.toastService.show('Error en el servidor, intenta más tarde' , { classname: 'bg-danger text-white'});
      });
    }
  }

  errorForm() {
    this.adminForm.markAllAsTouched();
    for (const key of Object.keys(this.adminForm.controls)) {
      if (this.adminForm.controls[key].invalid) {
        const invalidControl = this.el.nativeElement.querySelector('[formcontrolname="' + key + '"]');
        invalidControl.focus();
        break;
      }
    }
  }
}
