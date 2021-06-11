import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import {HomeComponent} from '../../pages/home/home.component';
import {RouterModule} from '@angular/router';
import { ModuleRegisterModule } from 'src/app/pages/register/module-register/module-register.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule
  ],
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule,
        ModuleRegisterModule
    ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ]
})
export class AuthLayoutModule { }
