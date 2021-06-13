import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from '../../routes/page404/page404.component';
import { RoutesLayoutComponent } from './routes-layout.component';
import {RouterModule} from '@angular/router';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [Page404Component, RoutesLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbCollapseModule
  ]
})
export class RoutesLayoutModule { }
