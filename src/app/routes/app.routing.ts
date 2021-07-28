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
import { HomeTeacherComponent } from '../pages/teacher/home-teacher/home-teacher.component';
import {CompanyStudentComponent} from '../pages/students/company-student/company-student.component';
import {DashboardCompanyComponent} from '../pages/company/dashboard-company/dashboard-company.component';
import {ProjectsCompanyComponent} from '../pages/company/projects-company/projects-company.component';
import {NewProjectCompanyComponent} from '../pages/company/projects-company/new-project-company/new-project-company.component';
import {AllRegistersCompanyComponent} from '../pages/company/all-registers-company/all-registers-company.component';
import {StudentsTableCompanyComponent} from '../pages/company/students-table-company/students-table-company.component';
import {ProfileCompanyComponent} from '../pages/company/profile-company/profile-company.component';
import {EditProfileCompanyComponent} from '../pages/company/profile-company/edit-profile-company/edit-profile-company.component';
import {StudentInfoCompanyComponent} from '../pages/company/student-info-company/student-info-company.component';
import {ProfileTeacherComponent} from '../pages/teacher/profile-teacher/profile-teacher.component';
import {EditProfileTeacherComponent} from '../pages/teacher/profile-teacher/edit-profile-teacher/edit-profile-teacher.component';
import {NewCompanyStudentComponent} from '../pages/students/company-student/new-company-student/new-company-student.component';


const routes: Routes = [
  {path: '', redirectTo: '/guest/login', pathMatch: 'full'},
  {
    path: 'guest', component: AuthLayoutComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'login'},
      {path: 'login', component: LoginComponent, data : {title: 'Freelork - Login'}},
      {path: 'register', component: RegisterComponent, children: [
          {path: '', pathMatch: 'full', redirectTo: 'student'},
          {path: 'teacher', component: TeacherComponent, data : {title: 'Freelork - Registo de Maestros'}},
          {path: 'company', component: CompanyComponent, data : {title: 'Freelork - Registro de Empresas'}},
          {path: 'student', component: StudentComponent, data : {title: 'Freelork - Registro de Estudiantes'}},
          {path: '**', redirectTo: '/not/404', data: { error: 2 }},
        ]},
      {path: '**', redirectTo: '/not/404', data: { error: 2 }},
    ]
  },
  {
    path: 'admin-guest/register', component: AuthLayoutComponent, children: [
      {path: '42hbjhv34345nj', component: AdminComponent, data : {title: 'Freelork - Registro de Administradores'}},
      {path: '**', redirectTo: '/not/404/error/unknown'}
    ]
  },
  {
    path: 'dash', component: AdminLayoutComponent, children: [
      {
        path: 'adm', children: [
          {path: 'home', component: HomeTeacherComponent, data : {title: 'Administrador - Dashboard'}},
          {path: 'projects', component: StudentsProjectsComponent, data : {title: 'Administrador - Proyectos'}},
          {path: '**', redirectTo: '/not/404' },
        ]
      },
      {
        path: 'std', canActivate: [AuthenticationGuard], data: {roles: ['1']}, children: [
          {path: 'home', component: HomeComponent, data : {title: 'Estudiantes - Dashboard'}},
          {path: 'register', children: [
              {path: '', component: StudentsTableComponent, data : {title: 'Estudiantes - Tareas'}},
              {path: 'create-task', component: RegisterTaskComponent, data : {title: 'Estudiantes - Nueva Tarea'}},
              {path: 'edit-task', component: RegisterTaskComponent, data : {title: 'Estudiantes - Editar Tarea'}},
              {path: '**', redirectTo: '/not/404' },
            ]},
          {path: 'projects', component: StudentsProjectsComponent, data : {title: 'Estudiantes - Proyectos'}},
          {path: 'group', children: [
              {path: '', component: GroupStudentComponent, data : {title: 'Estudiantes - Grupo'}},
              {path: 'new', component: NewGroupStudentComponent, data : {title: 'Estudiantes - Unirse a grupo'}},
              {path: '**', redirectTo: '/not/404' },
            ]},
          {path: 'company', children: [
              {path: '', component: CompanyStudentComponent, data : {title: 'Estudiantes - Empresa'}},
              {path: 'new', component: NewCompanyStudentComponent, data : {title: 'Estudiantes - Unirse a empresa'}},
              {path: '**', redirectTo: '/not/404' },
            ]},
              {path: 'profile', children: [
              {path: '', component: ProfileStudentComponent, data : {title: 'Estudiantes - Perfil'}},
              {path: 'edit', component: EditProfileStudentComponent, data : {title: 'Estudiantes - Editar perfil'}},
                  {path: '**', redirectTo: '/not/404' },
                ]},
          {path: '**', redirectTo: '/not/404' },
        ]
      },
      {
        path: 'tch', canActivate: [AuthenticationGuard], data: {roles: ['2'] }, children: [
          {path: 'home', component: HomeTeacherComponent, data : {title: 'Profesores - Dashboard'}},
          {path: 'groups', children: [
              {path: '', component: GroupsComponent, data : {title: 'Profesores - Grupos'}},
              {path: 'create-group', component: CreateGroupComponent, data : {title: 'Profesores - Crear Grupo'}},
              {path: 'edit-group', component: CreateGroupComponent, data : {title: 'Profesores - Editar Grupo'}},
              {path: '**', redirectTo: '/not/404' },
            ]},
          {path: 'students', children: [
              {path: '', component: StudentsListComponent, data : {title: 'Profesores - Estudiantes'}},
              {path: 'students-profile/:id', component: StudentsProfileComponent, data : {title: 'Profesores - Perfil Estudiante'}},
              {path: '**', redirectTo: '/not/404' },
            ]},
          {path: 'profile', children: [
              {path: '', component: ProfileTeacherComponent, data : {title: 'Profesores - Perfil'}},
              {path: 'edit', component: EditProfileTeacherComponent, data : {title: 'Profesores - Editar Perfil'}},
              {path: '**', redirectTo: '/not/404' },
            ]},
          {path: '**', redirectTo: '/not/404' },
        ]
      },
      {
        path: 'comp', canActivate: [AuthenticationGuard], data: {roles: ['3'] }, children: [
          {path: 'home', component: DashboardCompanyComponent, data : {title: 'Empresa - Dashboard'}},
          {path: 'projects', children: [
              {path: '', component: ProjectsCompanyComponent, data : {title: 'Empresa - Proyectos'}},
              {path: 'new', component: NewProjectCompanyComponent, data : {title: 'Empresa - Nuevo Proyecto'}},
              {path: 'edit/:id', component: NewProjectCompanyComponent, data : {title: 'Empresa - Editar Proyecto'}},
              {path: '**', redirectTo: '/not/404' },
            ]},
          {path: 'all-list', component: AllRegistersCompanyComponent, data : {title: 'Empresa - Tareas'}},
          {path: 'students', children: [
              {path: '', component: StudentsListComponent, data : {title: 'Empresa - Estudiantes'}},
              {path: 'students-profile/:id', component: StudentsProfileComponent, data : {title: 'Empresa - Perfil de estudiante'}},
              {path: '**', redirectTo: '/not/404' },
            ]},
          {path: 'profile', children: [
              {path: '', component: ProfileCompanyComponent, data : {title: 'Empresa - Perfil'}},
              {path: 'edit', component: EditProfileCompanyComponent, data : {title: 'Empresa - Editar Perfil'}},
              {path: '**', redirectTo: '/not/404' },
            ]},

          {path: '**', redirectTo: '/not/404' },
        ]
      },
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'user-profile', component: UserProfileComponent, data : {title: 'Estudiantes - Dashboard'}},
      {path: 'tables', component: TablesComponent, data : {title: 'Estudiantes - Dashboard'}},
      {path: 'icons', component: IconsComponent, data : {title: 'Estudiantes - Dashboard'}},
      {path: 'maps', component: MapsComponent, data : {title: 'Estudiantes - Dashboard'}},
      {path: '**', redirectTo: '/not/404'},
    ]
  },
  {path: 'not', component: RoutesLayoutComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: '404'},
      {path: '404', component: Page404Component, data : {title: 'Error 404'}},
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
