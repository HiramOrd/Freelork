import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import {HomeComponent} from '../../pages/home/home.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
    // NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ]
})
export class AuthLayoutModule { }
