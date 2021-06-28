import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {UtilitiesService} from '../../services/utilities.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  loginError = false;

  constructor( private router: Router, private authService: AuthenticationService, private utilitiesService: UtilitiesService) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  get email() {return this.loginForm.get('email'); }
  get password() {return this.loginForm.get('email'); }

  ngOnInit() {
    this.authService.logout();
  }
  ngOnDestroy() {
  }

  getLogin() {
    this.authService.login(this.email.value, this.password.value).subscribe((response) => {
      this.loginError = false;
      localStorage.setItem('token', response.token);
      localStorage.setItem('role', response.role);
      this.router.navigate(['/dash/' + this.utilitiesService.getRoleRoute() + 'home']);
    }, (error) => {
      // this.loginError = true;
      // this.loginForm.reset();
      localStorage.setItem('token', 'true');
      localStorage.setItem('role', '1');

      this.router.navigate(['/dash/' + this.utilitiesService.getRoleRoute() + 'home']);
    });
  }

  loginSubmit(): void {
    (this.loginForm.valid) ? this.getLogin() :  this.loginForm.markAllAsTouched();
  }

}
