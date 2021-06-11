import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  login: FormGroup;

  constructor( private router: Router) {
    this.login = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  loginSubmit(): void {
    (this.login.valid) ? this.router.navigate(['/dashboard']) :  this.login.markAllAsTouched();
  }

}
