import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../students.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalViewAdvisesComponent} from './modal-view-advises/modal-view-advises.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public studentsService: StudentsService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  viewAdviseModal(): void {
    const modalRef = this.modalService.open(ModalViewAdvisesComponent);
  }

}
