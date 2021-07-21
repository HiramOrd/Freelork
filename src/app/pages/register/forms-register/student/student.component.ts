import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AllUsersComponent} from '../all-users/all-users.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() studentData;
  @Output() studentDataOut: EventEmitter<FormGroup>;
  @ViewChild(AllUsersComponent, {static: true}) public registerFormComponent: AllUsersComponent;
  studentsForm: FormGroup;

  constructor(private router: Router, private el: ElementRef) {
    this.studentDataOut = new EventEmitter<FormGroup>();
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

    // TODO: Set Student Data into FormGroup
    if (this.studentData) {
    }
  }

  studentsSubmit(): void {
    (this.studentsForm.valid) ? this.postStudent() : this.errorForm();
  }

  postStudent() {
    if (this.studentData) {
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
