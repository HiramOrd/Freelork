import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilitiesModule } from 'src/app/utilities/utilities.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbTooltipModule}  from '@ng-bootstrap/ng-bootstrap';
import { GroupsComponent } from './groups/groups.component';
import { CreateGroupComponent } from './groups/create-group/create-group.component';
import { ModalDeleteGroupComponent } from './groups/modal-delete-group/modal-delete-group.component';


@NgModule({
  declarations: [GroupsComponent, CreateGroupComponent, ModalDeleteGroupComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    UtilitiesModule,
    NgbModule,
    NgbTooltipModule
  ],
})
export class TeacherModule { }
