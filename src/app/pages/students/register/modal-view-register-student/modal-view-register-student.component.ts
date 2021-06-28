import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-view-register-student',
  templateUrl: './modal-view-register-student.component.html',
  styleUrls: ['./modal-view-register-student.component.css']
})
export class ModalViewRegisterStudentComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
