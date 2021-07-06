import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalDeleteRegisterStudentComponent } from '../modal-delete-register-student/modal-delete-register-student.component';

@Component({
  selector: 'app-modal-view-register-student',
  templateUrl: './modal-view-register-student.component.html',
  styleUrls: ['./modal-view-register-student.component.css']
})
export class ModalViewRegisterStudentComponent implements OnInit {

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {}

  deleteRegister() {
    this.activeModal.dismiss('Change Modal');
    const modalRef = this.modalService.open(ModalDeleteRegisterStudentComponent);
    modalRef.componentInstance.name = 'World';
  }

}
