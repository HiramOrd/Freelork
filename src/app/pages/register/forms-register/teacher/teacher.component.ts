import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AllUsersComponent} from '../all-users/all-users.component';
import {HttpClientService} from '../../../../services/http-client.service';
import {UtilitiesService} from '../../../../utilities/utilities.service';
import {ToastService} from '../../../../utilities/toast.service';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  @Input() edit = false;
  @Output() teacherDataOut: EventEmitter<FormGroup>;
  @Output() imageTeacher: EventEmitter<string>;

  @ViewChild(AllUsersComponent, {static: true}) public registerFormComponent: AllUsersComponent;
  teachersForm: FormGroup;

  constructor(
    private router: Router,
    private el: ElementRef,
    private httpClientService: HttpClientService,
    private utilitiesService: UtilitiesService,
    private toastService: ToastService) {
    this.teacherDataOut = new EventEmitter<FormGroup>();
    this.imageTeacher = new EventEmitter<string>();
  }

  ngOnInit(): void {

    this.teachersForm = new FormGroup({
      phone: new FormControl(null, [Validators.required, Validators.pattern('[0-9 ]{10}')]),
      grade: new FormControl(null, [Validators.required]),
      userEntity: this.registerFormComponent.createFormGroup(),
    });
    this.teachersForm
      .get('userEntity')
      .get('email')
      .setValidators([Validators.required, Validators.pattern(/^[a-z0-9._%+-]{4,20}@docentes\.upqroo\.edu\.mx/)]);
  }

  teachersSubmit(): void {
    console.log(this.teachersForm.getRawValue());
    (this.teachersForm.valid) ? this.postTeacher() : this.errorForm();
  }

  postTeacher() {
    if (this.edit) {
      this.teacherDataOut.emit(this.teachersForm);
    } else {
      console.log(this.teachersForm.getRawValue());
      this.httpClientService.registerTeacher(this.teachersForm.getRawValue()).subscribe( () => {
        this.toastService.show('¡Se ha registrado exitosamente!' , { classname: 'bg-success text-white'});
        this.router.navigate(['/guest/login']);
      }, (error) => {
        console.log(error);
        this.toastService.show('Error en el servidor, intenta más tarde' , { classname: 'bg-danger text-white'});
      });
    }
  }

  errorForm() {
    this.teachersForm.markAllAsTouched();
    for (const key of Object.keys(this.teachersForm.controls)) {
      if (this.teachersForm.controls[key].invalid) {
        const invalidControl = this.el.nativeElement.querySelector('[formcontrolname="' + key + '"]');
        invalidControl.focus();
        break;
      }
    }
  }
}
