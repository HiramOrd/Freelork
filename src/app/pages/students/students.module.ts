import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsTableComponent } from './register/students-table.component';
import {NgbDropdownModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import { StudentsProjectsComponent } from './projects/students-projects.component';
import { ModalViewRegisterStudentComponent } from './register/modal-view-register-student/modal-view-register-student.component';
import { ModalDeleteRegisterStudentComponent } from './register/modal-delete-register-student/modal-delete-register-student.component';
import { ModalDeleteProjectsComponent } from './projects/modal-delete-projects/modal-delete-projects.component';
import {RegisterTaskComponent} from './register-task/register-task.component';
import {UtilitiesModule} from '../../utilities/utilities.module';



@NgModule({
  declarations: [
    StudentsTableComponent,
    HomeComponent,
    StudentsProjectsComponent,
    ModalViewRegisterStudentComponent,
    ModalDeleteRegisterStudentComponent,
    ModalDeleteProjectsComponent,
    RegisterTaskComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    FormsModule,
    RouterModule,
    NgbTooltipModule,
    UtilitiesModule
  ]
})
export class StudentsModule { }
