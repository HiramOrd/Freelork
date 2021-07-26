import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-retrieve-password-modal',
  templateUrl: './retrieve-password-modal.component.html',
  styleUrls: ['./retrieve-password-modal.component.css']
})
export class RetrievePasswordModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
