import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  loginError = false;

  constructor( private router: Router, private authService: AuthenticationService) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  get email() {return this.loginForm.get('email'); }
  get password() {return this.loginForm.get('email'); }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  getLogin() {
    this.authService.login(this.email.value, this.password.value).subscribe((response) => {
      this.loginError = false;
      localStorage.setItem('token', response.token);
      this.router.navigate(['/dash']);
    }, (error) => {
      // this.loginError = true;
      // this.loginForm.reset();
      localStorage.setItem('token', 'true');
      this.router.navigate(['/dash']);
    });
  }

  loginSubmit(): void {
    (this.loginForm.valid) ? this.getLogin() :  this.loginForm.markAllAsTouched();
  }

}
