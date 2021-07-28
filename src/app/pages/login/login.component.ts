import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {UtilitiesService} from '../../utilities/utilities.service';
import {ToastService} from '../../utilities/toast.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DeleteCompanyStudentComponent} from '../students/company-student/delete-company-student/delete-company-student.component';
import {RetrievePasswordModalComponent} from './retrieve-password-modal/retrieve-password-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private utilitiesService: UtilitiesService,
    private toastService: ToastService,
    private modalService: NgbModal
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  ngOnInit() {
    this.authService.logout();
  }
  ngOnDestroy() {
  }

  getLogin() {
    this.authService.login(this.loginForm.getRawValue()).subscribe((response) => {
      localStorage.setItem('token', response.token);
      localStorage.setItem('role', response.user.role);
      localStorage.setItem('id', response.user.id);
      localStorage.setItem('fullName', response.user.fullName);
      localStorage.setItem('imageUrl', response.user.imageUrl);
      this.router.navigate(['/dash/' + this.utilitiesService.getRoleRoute() + 'home']);
    }, (error) => {
      this.loginForm.reset();
      console.warn(error);
      if (error.status === 417) {
        this.toastService.show('Usuario o contraseña incorrectos' , { classname: 'bg-danger text-white'});
      } else {
        this.toastService.show('Error en el servidor, intenta más tarde' , { classname: 'bg-danger text-white'});
      }

      // Test
      // localStorage.setItem('token', 'token');
      // localStorage.setItem('role', '1');
      // localStorage.setItem('id', '1');
      // this.router.navigate(['/dash/' + this.utilitiesService.getRoleRoute() + 'home']);
    });
  }

  loginSubmit(): void {
    (this.loginForm.valid) ? this.getLogin() :  this.loginForm.markAllAsTouched();
  }

  openRetriveModal() {
    const modalRef = this.modalService.open(RetrievePasswordModalComponent);
  }
}
