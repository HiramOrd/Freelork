import {Component, OnInit, ViewChild} from '@angular/core';
import {AllUsersComponent} from '../forms-register/all-users/all-users.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @ViewChild(AllUsersComponent, {static: true}) public registerFormComponent: AllUsersComponent;
  adminForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.adminForm = new FormGroup({
      role: new FormControl('0'),
      registerForm: this.registerFormComponent.createFormGroup(),
    });
  }

  teachersSubmit(): void {
    console.log(this.adminForm.getRawValue());
    (this.adminForm.valid) ? this.router.navigate(['/login']) : this.adminForm.markAllAsTouched();
  }
}
