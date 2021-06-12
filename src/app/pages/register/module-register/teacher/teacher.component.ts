import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RegisterFormComponent} from '../register-form/register-form.component';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  @ViewChild(RegisterFormComponent, {static: true}) public registerFormComponent: RegisterFormComponent;
  teachersForm: FormGroup;

  constructor(private router: Router) {
  }

  ngOnInit(): void {

    this.teachersForm = new FormGroup({
      role: new FormControl('1'),
      career: new FormControl(null, [Validators.required]),
      registerForm: this.registerFormComponent.createFormGroup(),
    });
    this.teachersForm
      .get('registerForm')
      .get('email')
      .setValidators([Validators.required, Validators.pattern(/^[a-z0-9._%+-]{4,20}@docentes\.upqroo\.edu\.mx/)]);
  }

  teachersSubmit(): void {
    console.log(this.teachersForm.getRawValue());
    (this.teachersForm.valid) ? this.router.navigate(['/login']) : this.teachersForm.markAllAsTouched();
  }
}
