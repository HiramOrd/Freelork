import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ContactTeamComponent} from '../contact-team/contact-team.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  test: Date = new Date();

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openContactModal() {
    const modalRef = this.modalService.open(ContactTeamComponent, {size: 'sm'});
  }

}
