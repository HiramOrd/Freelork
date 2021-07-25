import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ModalViewRegisterStudentComponent} from '../register/modal-view-register-student/modal-view-register-student.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DeleteGroupStudentComponent} from './delete-group-student/delete-group-student.component';

@Component({
  selector: 'app-group-student',
  templateUrl: './group-student.component.html',
  styleUrls: ['./group-student.component.css']
})
export class GroupStudentComponent implements OnInit {

  constructor(public router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModalDelete() {
    const modalRef = this.modalService.open(DeleteGroupStudentComponent);
  }

}
