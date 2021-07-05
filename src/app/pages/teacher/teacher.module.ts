import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsComponent } from './groups/groups.component';
import { CreateGroupComponent } from './groups/create-group/create-group.component';
import { ModalDeleteGroupComponent } from './groups/modal-delete-group/modal-delete-group.component';



@NgModule({
  declarations: [GroupsComponent, CreateGroupComponent, ModalDeleteGroupComponent],
  imports: [
    CommonModule
  ]
})
export class TeacherModule { }
