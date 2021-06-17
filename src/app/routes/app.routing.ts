import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {AdminLayoutComponent} from '../layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from '../layouts/auth-layout/auth-layout.component';
import {HomeComponent} from '../pages/home/home.component';
import {LoginComponent} from '../pages/login/login.component';
import {RegisterComponent} from '../pages/register/register.component';
import {DashboardComponent} from '../pages/dashboard/dashboard.component';
import {UserProfileComponent} from '../pages/user-profile/user-profile.component';
import {TablesComponent} from '../pages/tables/tables.component';
import {IconsComponent} from '../pages/icons/icons.component';
import {MapsComponent} from '../pages/maps/maps.component';
import {CompanyComponent} from '../pages/register/forms-register/company/company.component';
import {TeacherComponent} from '../pages/register/forms-register/teacher/teacher.component';
import {StudentComponent} from '../pages/register/forms-register/student/student.component';
import {Page404Component} from './page404/page404.component';
import {RoutesLayoutComponent} from '../layouts/routes-layout/routes-layout.component';
import {AuthenticationGuard} from '../authentication.guard';
import {AdminComponent} from '../pages/register/forms-register/admin/admin.component';

const routes: Routes = [
  {path: '', redirectTo: 'dash/home', pathMatch: 'full'},
  {
    path: 'guest', component: AuthLayoutComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent, children: [
          {path: '', pathMatch: 'full', redirectTo: 'student'},
          {path: 'teacher', component: TeacherComponent},
          {path: 'company', component: CompanyComponent},
          {path: 'student', component: StudentComponent},
          {path: '**', redirectTo: '/not/404/error/register'}
        ]},
      {path: '**', redirectTo: '/not/404/error/guest'},
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
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'home', component: HomeComponent},
      {path: 'user-profile', component: UserProfileComponent},
      {path: 'tables', component: TablesComponent},
      {path: 'icons', component: IconsComponent},
      {path: 'maps', component: MapsComponent},
      {path: '**', redirectTo: '/not/404/error/dash'},
    ]
  },
  {path: 'not', component: RoutesLayoutComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: '404/error/unknown'},
      {path: '404/error/:origin', component: Page404Component},
      {path: '**', redirectTo: '404/error/unknown'},
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
