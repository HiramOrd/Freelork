import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RegisterFormComponent} from '../register-form/register-form.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  @ViewChild(RegisterFormComponent, {static: true}) public registerFormComponent: RegisterFormComponent;
  companysForm: FormGroup;
  
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.companysForm = new FormGroup({
      role: new FormControl('3'),
      sizecompany: new FormControl(null, [Validators.required]),
      service: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      cellphone: new FormControl(null, [Validators.required, Validators.pattern("[0-9 ]{10}")]),
      career: new FormControl(null, [Validators.required]),
      registerForm: this.registerFormComponent.createFormGroup(),
    });
    this.companysForm
      .get('registerForm')
      .get('email')
      .setValidators([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
  }

  companysSubmit(): void {
    console.log(this.companysForm.getRawValue());
    (this.companysForm.valid) ? this.router.navigate(['/login']) : this.companysForm.markAllAsTouched();
  }

}
