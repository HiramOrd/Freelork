import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-delete-project-company',
  templateUrl: './modal-delete-project-company.component.html',
  styleUrls: ['./modal-delete-project-company.component.css']
})
export class ModalDeleteProjectCompanyComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  deleteProject() {
    console.log('deleted');
  }

}
