import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {UserProfileComponent} from './pages/user-profile/user-profile.component';
import {TablesComponent} from './pages/tables/tables.component';
import {IconsComponent} from './pages/icons/icons.component';
import {MapsComponent} from './pages/maps/maps.component';
import {CompanyComponent} from './pages/register/module-register/company/company.component';
import {TeacherComponent} from './pages/register/module-register/teacher/teacher.component';
import {StudentComponent} from './pages/register/module-register/student/student.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: '', component: AdminLayoutComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'user-profile', component: UserProfileComponent},
      {path: 'tables', component: TablesComponent},
      {path: 'icons', component: IconsComponent},
      {path: 'maps', component: MapsComponent}
    ]
  },
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent, children: [
          {path: 'teacher', component: TeacherComponent},
          {path: 'company', component: CompanyComponent},
          {path: 'student', component: StudentComponent},
          {path: '**', redirectTo: 'student'}
        ]},
    ]
  },
  {path: '**', redirectTo: 'dashboard'}
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
