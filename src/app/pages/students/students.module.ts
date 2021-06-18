import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsTableComponent } from './register/students-table.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [StudentsTableComponent],
  imports: [
    CommonModule,
    NgbDropdownModule,
    FormsModule
  ]
})
export class StudentsModule { }
