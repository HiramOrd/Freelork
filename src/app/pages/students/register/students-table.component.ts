import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalViewRegisterStudentComponent} from './modal-view-register-student/modal-view-register-student.component';
import {StudentsService} from '../students.service';

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
  public isCollapsed = true;

  constructor(public studentsService: StudentsService) {
    this.today = Date.now();
    this.dateMinRange = this.today;
    this.dateMaxRange = this.today;
  }

  ngOnInit(): void {
  }
}
