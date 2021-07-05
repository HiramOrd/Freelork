import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-delete-projects',
  templateUrl: './modal-delete-projects.component.html',
  styleUrls: ['./modal-delete-projects.component.css']
})
export class ModalDeleteProjectsComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  deleteRegister(){
  }
  
}
