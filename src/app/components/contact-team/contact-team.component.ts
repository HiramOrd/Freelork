import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-team',
  templateUrl: './contact-team.component.html',
  styleUrls: ['./contact-team.component.css']
})
export class ContactTeamComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {

  }

  ngOnInit(): void {
  }

}
