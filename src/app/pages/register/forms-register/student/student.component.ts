import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AllUsersComponent} from '../all-users/all-users.component';
import {HttpClientService} from '../../../../services/http-client.service';
import {UtilitiesService} from '../../../../utilities/utilities.service';

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
    private utilitiesService: UtilitiesService
  ) {
    this.studentDataOut = new EventEmitter<FormGroup>();
    this.imageStudent = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this.studentsForm = new FormGroup({
      role: new FormControl('1'),
      enrollment: new FormControl(null, [Validators.required, Validators.minLength(9)]),
      registerForm: this.registerFormComponent.createFormGroup(),
    });
    this.studentsForm
      .get('registerForm')
      .get('email')
      .setValidators([Validators.required, Validators.pattern(/^[a-z0-9._%+-]{9,}@estudiantes\.upqroo\.edu\.mx/)]);

    console.log('ID: ' + this.utilitiesService.getId());
    if (this.edit) {
      this.httpClientService.getStudentProfile(this.utilitiesService.getId()).subscribe( response => {
        console.log(response);
        this.studentsForm.get('registerForm').get('fullName').setValue(response.fullName);
        this.studentsForm.get('registerForm').get('email').setValue(response.email);
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
      this.router.navigate(['/login']);
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
