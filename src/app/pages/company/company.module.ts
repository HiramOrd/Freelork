import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCompanyComponent } from './dashboard-company/dashboard-company.component';
import { ProjectsCompanyComponent } from './projects-company/projects-company.component';
import { NewProjectCompanyComponent } from './projects-company/new-project-company/new-project-company.component';
import { AllRegistersCompanyComponent } from './all-registers-company/all-registers-company.component';
import { StudentsTableCompanyComponent } from './students-table-company/students-table-company.component';
import { StudentInfoCompanyComponent } from './student-info-company/student-info-company.component';
import { ProfileCompanyComponent } from './profile-company/profile-company.component';
import { ModalDeleteProjectCompanyComponent } from './projects-company/modal-delete-project-company/modal-delete-project-company.component';
import { EditProfileCompanyComponent } from './profile-company/edit-profile-company/edit-profile-company.component';
import {FormsModule} from '@angular/forms';
import {UtilitiesModule} from '../../utilities/utilities.module';
import {NgbCollapseModule, NgbDropdownModule, NgbPaginationModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [DashboardCompanyComponent, ProjectsCompanyComponent, NewProjectCompanyComponent, AllRegistersCompanyComponent, StudentsTableCompanyComponent, StudentInfoCompanyComponent, ProfileCompanyComponent, ModalDeleteProjectCompanyComponent, EditProfileCompanyComponent],
  imports: [
    CommonModule,
    FormsModule,
    UtilitiesModule,
    NgbPaginationModule,
    RouterModule,
    NgbTooltipModule,
    NgbDropdownModule,
    NgbCollapseModule
  ]
})
export class CompanyModule { }
