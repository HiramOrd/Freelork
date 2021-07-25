import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-group-student',
  templateUrl: './delete-group-student.component.html',
  styleUrls: ['./delete-group-student.component.css']
})
export class DeleteGroupStudentComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  deleteGroup() {
  }

}
