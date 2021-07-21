import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AdminLayoutComponent} from './admin-layout.component';
import {ComponentsModule} from '../../components/components.module';
import {RouterModule} from '@angular/router';
import {StudentsModule} from '../../pages/students/students.module';
import {TeacherModule} from '../../pages/teacher/teacher.module';
import {AllUsersModule} from '../../pages/all-users/all-users.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ComponentsModule,
    RouterModule,
    StudentsModule,
    TeacherModule,
    AllUsersModule
  ],
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent
  ],
  exports: [
    AdminLayoutComponent,
    DashboardComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent
  ]
})

export class AdminLayoutModule {}
