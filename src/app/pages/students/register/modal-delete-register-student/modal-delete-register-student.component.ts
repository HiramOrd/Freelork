import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-delete-register-student',
  templateUrl: './modal-delete-register-student.component.html',
  styleUrls: ['./modal-delete-register-student.component.css']
})
export class ModalDeleteRegisterStudentComponent implements OnInit {
  @Input() id;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.id);
  }

  deleteRegister(): void {
  }

}
