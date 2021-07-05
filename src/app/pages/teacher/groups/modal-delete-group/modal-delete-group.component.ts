import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-delete-group',
  templateUrl: './modal-delete-group.component.html',
  styleUrls: ['./modal-delete-group.component.css']
})
export class ModalDeleteGroupComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  deleteGroup(){
    
  }

}
