import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-view-advises',
  templateUrl: './modal-view-advises.component.html',
  styleUrls: ['./modal-view-advises.component.css']
})
export class ModalViewAdvisesComponent implements OnInit {

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
