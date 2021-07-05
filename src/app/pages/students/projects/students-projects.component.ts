import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalDeleteProjectsComponent } from './modal-delete-projects/modal-delete-projects.component';

@Component({
  selector: 'app-projects',
  templateUrl: './students-projects.component.html',
  styleUrls: ['./students-projects.component.css']
})
export class StudentsProjectsComponent implements OnInit {

  constructor(private modalService: NgbModal){}

  ngOnInit(): void {
  }

  deleteRegister() {
    const modalRef = this.modalService.open(ModalDeleteProjectsComponent);
    modalRef.componentInstance.name = 'World';
  }

}
