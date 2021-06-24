import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher/teacher.component';
import { CompanyComponent } from './company/company.component';
import { StudentComponent } from './student/student.component';
import { RegisterComponent } from '../register.component';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AllUsersComponent } from './all-users/all-users.component';
import {UtilitiesModule} from '../../../utilities/utilities.module';
import { AdminComponent } from '../admin/admin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    UtilitiesModule
  ],
  declarations: [
    TeacherComponent,
    CompanyComponent,
    StudentComponent,
    RegisterComponent,
    AllUsersComponent,
    AdminComponent
  ],
  exports: [
    TeacherComponent,
    CompanyComponent,
    StudentComponent,
    RegisterComponent
  ]
})
export class FormsRegisterModule { }
