import { Component, OnInit } from '@angular/core';
import {ModalAddProjectComponent} from '../../students/projects/modal-add-project/modal-add-project.component';
import {ModalDeleteProjectsComponent} from '../../students/projects/modal-delete-projects/modal-delete-projects.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalDeleteProjectCompanyComponent} from './modal-delete-project-company/modal-delete-project-company.component';

@Component({
  selector: 'app-projects-company',
  templateUrl: './projects-company.component.html',
  styleUrls: ['./projects-company.component.css']
})
export class ProjectsCompanyComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open() {
    this.modalService.open(ModalAddProjectComponent);
  }

  deleteRegister() {
    const modalRef = this.modalService.open(ModalDeleteProjectCompanyComponent);
    modalRef.componentInstance.name = 'World';
  }
}
