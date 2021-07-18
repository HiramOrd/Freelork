import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersOnlyDirective } from './numbers-only.directive';
import {NgbdSortableHeader} from './tables/sortable.directive';



@NgModule({
  declarations: [NumbersOnlyDirective, NgbdSortableHeader],
  exports: [
    NumbersOnlyDirective,
    NgbdSortableHeader
  ],
  imports: [
    CommonModule
  ]
})
export class UtilitiesModule { }
