import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AllUsersComponent} from '../all-users/all-users.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  @ViewChild(AllUsersComponent, {static: true}) public registerFormComponent: AllUsersComponent;
  companysForm: FormGroup;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.companysForm = new FormGroup({
      role: new FormControl('3'),
      sizecompany: new FormControl(null, [Validators.required]),
      service: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      registerForm: this.registerFormComponent.createFormGroup(),
    });
  }

  companysSubmit(): void {
    console.log(this.companysForm.getRawValue());
    (this.companysForm.valid) ? this.router.navigate(['/login']) : this.companysForm.markAllAsTouched();
  }

}
