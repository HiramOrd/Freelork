import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher/teacher.component';
import { CompanyComponent } from './company/company.component';
import { StudentComponent } from './student/student.component';
import { RegisterComponent } from '../register.component';

@NgModule({
  declarations: [TeacherComponent, CompanyComponent, StudentComponent, RegisterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RegisterComponent
  ]
})
export class ModuleRegisterModule { }
