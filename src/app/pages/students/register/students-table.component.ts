import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalViewRegisterStudentComponent} from './modal-view-register-student/modal-view-register-student.component';

@Component({
  selector: 'app-register',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {
  today;
  dateMinRange;
  dateMaxRange;
  dateDisabled = true;

  constructor(private modalService: NgbModal) {
    this.today = Date.now();
    this.dateMinRange = this.today;
    this.dateMaxRange = this.today;
  }

  ngOnInit(): void {
  }

  viewRegister() {
    const modalRef = this.modalService.open(ModalViewRegisterStudentComponent);
    modalRef.componentInstance.name = 'World';
  }

}
