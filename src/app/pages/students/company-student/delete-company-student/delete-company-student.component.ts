import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-company-student',
  templateUrl: './delete-company-student.component.html',
  styleUrls: ['./delete-company-student.component.css']
})
export class DeleteCompanyStudentComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  deleteCompany() {
  }
}
