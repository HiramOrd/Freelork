import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RegisterFormComponent} from '../register-form/register-form.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @ViewChild(RegisterFormComponent, {static: true}) public registerFormComponent: RegisterFormComponent;
  studentsForm: FormGroup;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.studentsForm = new FormGroup({
      role: new FormControl('0'),
      enrollment: new FormControl(null, [Validators.required, Validators.minLength(9)]),
      career: new FormControl(null, [Validators.required]),
      quarter: new FormControl(null, [Validators.required]),
      schedule: new FormControl(null, [Validators.required]),
      registerForm: this.registerFormComponent.createFormGroup(),
    });
    this.studentsForm
      .get('registerForm')
      .get('email')
      .setValidators([Validators.required, Validators.pattern(/^[a-z0-9._%+-]{9,}@estudiantes\.upqroo\.edu\.mx/)]);
  }

  studentsSubmit(): void {
    console.log(this.studentsForm.getRawValue());
    (this.studentsForm.valid) ? this.router.navigate(['/login']) : this.studentsForm.markAllAsTouched();
  }

}
