import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilitiesModule } from 'src/app/utilities/utilities.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import { GroupsComponent } from './groups/groups.component';
import { CreateGroupComponent } from './groups/create-group/create-group.component';
import { ModalDeleteGroupComponent } from './groups/modal-delete-group/modal-delete-group.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { StudentsProfileComponent } from './students/students-profile/students-profile.component';
import { HomeTeacherComponent } from './home-teacher/home-teacher.component';
import {RouterModule} from '@angular/router';
import {AllUsersModule} from '../all-users/all-users.module';
import { ProfileTeacherComponent } from './profile-teacher/profile-teacher.component';
import { EditProfileTeacherComponent } from './profile-teacher/edit-profile-teacher/edit-profile-teacher.component';
import {FormsRegisterModule} from '../register/forms-register/forms-register.module';



@NgModule({
  declarations: [GroupsComponent, CreateGroupComponent, ModalDeleteGroupComponent, StudentsListComponent, StudentsProfileComponent, HomeTeacherComponent, ProfileTeacherComponent, EditProfileTeacherComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    UtilitiesModule,
    NgbModule,
    NgbTooltipModule,
    RouterModule,
    AllUsersModule,
    FormsRegisterModule
  ],
})
export class TeacherModule { }
