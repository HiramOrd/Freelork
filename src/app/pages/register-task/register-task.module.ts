import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterTaskComponent } from './register-task.component';
import {UtilitiesModule} from '../../utilities/utilities.module';



@NgModule({
  declarations: [RegisterTaskComponent],
    imports: [
        CommonModule,
        UtilitiesModule
    ]
})
export class RegisterTaskModule { }
