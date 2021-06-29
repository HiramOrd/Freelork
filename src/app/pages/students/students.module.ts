import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsTableComponent } from './register/students-table.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import { StudentsProjectsComponent } from './projects/students-projects.component';
import { ModalViewRegisterStudentComponent } from './register/modal-view-register-student/modal-view-register-student.component';
import { ModalDeleteRegisterStudentComponent } from './register/modal-delete-register-student/modal-delete-register-student.component';



@NgModule({
  declarations: [
    StudentsTableComponent,
    HomeComponent,
    StudentsProjectsComponent,
    ModalViewRegisterStudentComponent,
    ModalDeleteRegisterStudentComponent,
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    FormsModule,
    RouterModule
  ]
})
export class StudentsModule { }
