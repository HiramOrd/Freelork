import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsTableComponent } from './register/students-table.component';
import {NgbDropdownModule, NgbModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import { StudentsProjectsComponent } from './projects/students-projects.component';
import { ModalViewRegisterStudentComponent } from './register/modal-view-register-student/modal-view-register-student.component';
import { ModalDeleteRegisterStudentComponent } from './register/modal-delete-register-student/modal-delete-register-student.component';
import { ModalDeleteProjectsComponent } from './projects/modal-delete-projects/modal-delete-projects.component';
import {RegisterTaskComponent} from './register-task/register-task.component';
import {UtilitiesModule} from '../../utilities/utilities.module';
import { ModalViewAdvisesComponent } from './home/modal-view-advises/modal-view-advises.component';
import { NewGroupStudentComponent } from './group-student/new-group-student/new-group-student.component';
import {ComponentsModule} from '../../components/components.module';
import { ModalAddProjectComponent } from './projects/modal-add-project/modal-add-project.component';
import { GroupStudentComponent } from './group-student/group-student.component';
import { ProfileStudentComponent } from './profile-student/profile-student.component';
import {AllUsersModule} from '../all-users/all-users.module';
import { EditProfileStudentComponent } from './profile-student/edit-profile-student/edit-profile-student.component';



@NgModule({
  declarations: [
    StudentsTableComponent,
    HomeComponent,
    StudentsProjectsComponent,
    ModalViewRegisterStudentComponent,
    ModalDeleteRegisterStudentComponent,
    ModalDeleteProjectsComponent,
    RegisterTaskComponent,
    ModalViewAdvisesComponent,
    NewGroupStudentComponent,
    ModalAddProjectComponent,
    GroupStudentComponent,
    ProfileStudentComponent,
    EditProfileStudentComponent,
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    FormsModule,
    RouterModule,
    NgbTooltipModule,
    UtilitiesModule,
    NgbModule,
    ReactiveFormsModule,
    ComponentsModule,
    AllUsersModule
  ]
})
export class StudentsModule { }
