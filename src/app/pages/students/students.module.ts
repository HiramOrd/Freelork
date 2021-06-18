import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsTableComponent } from './register/students-table.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [StudentsTableComponent],
  imports: [
    CommonModule,
    NgbDropdownModule
  ]
})
export class StudentsModule { }
