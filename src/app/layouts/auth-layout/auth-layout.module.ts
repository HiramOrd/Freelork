import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../../pages/login/login.component';
import {HomeComponent} from '../../pages/home/home.component';
import {RouterModule} from '@angular/router';
import { FormsRegisterModule } from 'src/app/pages/register/forms-register/forms-register.module';
import {AuthLayoutComponent} from './auth-layout.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule,
    FormsRegisterModule
  ],
  declarations: [
    AuthLayoutComponent,
    LoginComponent,
    HomeComponent,
  ],
  exports: [
    AuthLayoutComponent,
    LoginComponent,
    HomeComponent
  ]
})
export class AuthLayoutModule { }
