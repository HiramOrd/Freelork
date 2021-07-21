import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {AdminLayoutComponent} from '../layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from '../layouts/auth-layout/auth-layout.component';
import {HomeComponent} from '../pages/students/home/home.component';
import {LoginComponent} from '../pages/login/login.component';
import {RegisterComponent} from '../pages/register/register.component';
import {UserProfileComponent} from '../pages/all-users/user-profile/user-profile.component';
import {TablesComponent} from '../pages/tables/tables.component';
import {IconsComponent} from '../pages/icons/icons.component';
import {MapsComponent} from '../pages/maps/maps.component';
import {CompanyComponent} from '../pages/register/forms-register/company/company.component';
import {TeacherComponent} from '../pages/register/forms-register/teacher/teacher.component';
import {StudentComponent} from '../pages/register/forms-register/student/student.component';
import {Page404Component} from './page404/page404.component';
import {RoutesLayoutComponent} from '../layouts/routes-layout/routes-layout.component';
import {AuthenticationGuard} from '../authentication.guard';
import {AdminComponent} from '../pages/register/admin/admin.component';
import {StudentsTableComponent} from '../pages/students/register/students-table.component';
import {StudentsProjectsComponent} from '../pages/students/projects/students-projects.component';
import { RegisterTaskComponent } from '../pages/students/register-task/register-task.component';
import { GroupsComponent } from '../pages/teacher/groups/groups.component';
import { CreateGroupComponent } from '../pages/teacher/groups/create-group/create-group.component';
import {NewGroupStudentComponent} from '../pages/students/group-student/new-group-student/new-group-student.component';
import {GroupStudentComponent} from '../pages/students/group-student/group-student.component';
import { StudentsListComponent } from '../pages/teacher/students/students-list/students-list.component';
import { StudentsProfileComponent } from '../pages/teacher/students/students-profile/students-profile.component';
import {ProfileStudentComponent} from '../pages/students/profile-student/profile-student.component';
import {EditProfileStudentComponent} from '../pages/students/profile-student/edit-profile-student/edit-profile-student.component';


const routes: Routes = [
  {path: '', redirectTo: '/guest/login', pathMatch: 'full'},
  {
    path: 'guest', component: AuthLayoutComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'login'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent, children: [
          {path: '', pathMatch: 'full', redirectTo: 'student'},
          {path: 'teacher', component: TeacherComponent},
          {path: 'company', component: CompanyComponent},
          {path: 'student', component: StudentComponent},
          {path: '**', redirectTo: '/not/404', data: { error: 2 }},
        ]},
      {path: '**', redirectTo: '/not/404', data: { error: 2 }},
    ]
  },
  {
    path: 'admin-guest/register', component: AuthLayoutComponent, children: [
      {path: '42hbjhv34345nj', component: AdminComponent},
      {path: '**', redirectTo: '/not/404/error/unknown'}
    ]
  },
  {
    path: 'dash', component: AdminLayoutComponent, canActivate: [AuthenticationGuard], children: [
      {
        path: 'adm', children: [
          {path: 'projects', component: StudentsProjectsComponent},
          {path: '**', redirectTo: '/not/404' },
        ]
      },
      {
        path: 'std', children: [
          {path: 'home', component: HomeComponent},
          {path: 'register', children: [
              {path: '', component: StudentsTableComponent},
              {path: 'create-task', component: RegisterTaskComponent},
              {path: 'edit-task', component: RegisterTaskComponent},
              {path: '**', redirectTo: '/not/404' },
            ]},
          {path: 'projects', component: StudentsProjectsComponent},
          {path: 'group', children: [
              {path: '', component: GroupStudentComponent},
              {path: 'new', component: NewGroupStudentComponent},
            ]},
          {path: 'profile', children: [
              {path: '', component: ProfileStudentComponent},
              {path: 'edit', component: EditProfileStudentComponent},
            ]},
          {path: '**', redirectTo: '/not/404' },
        ]
      },
      {
        path: 'tch', children: [
          {path: 'groups', component: GroupsComponent},
          {path: 'create-group', component: CreateGroupComponent},
          {path: 'students-list', component: StudentsListComponent},
          {path: 'students-profile', component: StudentsProfileComponent},
          {path: '**', redirectTo: '/not/404' },
        ]
      },
      {
        path: 'comp', children: [
          {path: '**', redirectTo: '/not/404' },
        ]
      },
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'user-profile', component: UserProfileComponent},
      {path: 'tables', component: TablesComponent},
      {path: 'icons', component: IconsComponent},
      {path: 'maps', component: MapsComponent},
      {path: '**', redirectTo: '/not/404'},
    ]
  },
  {path: 'not', component: RoutesLayoutComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: '404'},
      {path: '404', component: Page404Component},
      {path: '**', redirectTo: '404'},
    ]},
  {path: '**', redirectTo: 'not'}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [],
})
export class AppRoutingModule {
}
