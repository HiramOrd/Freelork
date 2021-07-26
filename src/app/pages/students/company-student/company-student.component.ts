import { Component, OnInit } from '@angular/core';
import {DeleteGroupStudentComponent} from '../group-student/delete-group-student/delete-group-student.component';
import {DeleteCompanyStudentComponent} from './delete-company-student/delete-company-student.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-company-student',
  templateUrl: './company-student.component.html',
  styleUrls: ['./company-student.component.css']
})
export class CompanyStudentComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModalDelete() {
    const modalRef = this.modalService.open(DeleteCompanyStudentComponent);

  }

}
