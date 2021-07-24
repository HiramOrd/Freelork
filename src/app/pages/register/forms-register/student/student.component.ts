import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AllUsersComponent} from '../all-users/all-users.component';
import {HttpClientService} from '../../../../services/http-client.service';
import {UtilitiesService} from '../../../../utilities/utilities.service';
import {ToastService} from '../../../../utilities/toast.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() edit = false;
  @Output() studentDataOut: EventEmitter<FormGroup>;
  @Output() imageStudent: EventEmitter<string>;
  @ViewChild(AllUsersComponent, {static: true}) public registerFormComponent: AllUsersComponent;
  studentsForm: FormGroup;

  constructor(
    private router: Router,
    private el: ElementRef,
    private httpClientService: HttpClientService,
    private utilitiesService: UtilitiesService,
    private toastService: ToastService
  ) {
    this.studentDataOut = new EventEmitter<FormGroup>();
    this.imageStudent = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this.studentsForm = new FormGroup({
      enrollment: new FormControl(null, [Validators.required, Validators.minLength(9)]),
      userEntity: this.registerFormComponent.createFormGroup(),
    });
    this.studentsForm
      .get('userEntity')
      .get('email')
      .setValidators([Validators.required, Validators.pattern(/^[a-z0-9._%+-]{9,}@estudiantes\.upqroo\.edu\.mx/)]);

    if (this.edit) {
      this.httpClientService.getStudentProfile(this.utilitiesService.getId()).subscribe( response => {
        console.log(response);
        this.studentsForm.get('userEntity').get('fullName').setValue(response.fullName);
        this.studentsForm.get('userEntity').get('email').setValue(response.email);
        this.studentsForm.get('enrollment').setValue(response.enrollment);
        if (response.imageUrl) {
          this.imageStudent.emit(response.imageUrl);
        }
      }, error => {
        console.log(error);
      });
    }
  }

  studentsSubmit(): void {
    (this.studentsForm.valid) ? this.postStudent() : this.errorForm();
  }

  postStudent() {
    if (this.edit) {
      this.studentDataOut.emit(this.studentsForm);
    } else {
      console.log(this.studentsForm.getRawValue());
      this.httpClientService.registerStudent(this.studentsForm.getRawValue()).subscribe( () => {
        this.toastService.show('¡Se ha registrado exitosamente!' , { classname: 'bg-success text-white'});
        this.router.navigate(['/guest/login']);
      }, () => {
        this.toastService.show('Error en el servidor, intenta más tarde' , { classname: 'bg-danger text-white'});
      });
    }
  }

  errorForm() {
    this.studentsForm.markAllAsTouched();
    for (const key of Object.keys(this.studentsForm.controls)) {
      if (this.studentsForm.controls[key].invalid) {
        const invalidControl = this.el.nativeElement.querySelector('[formcontrolname="' + key + '"]');
        invalidControl.focus();
        break;
      }
    }
  }

}
