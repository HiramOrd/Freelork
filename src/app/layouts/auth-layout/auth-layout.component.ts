import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {ContactTeamComponent} from '../../components/contact-team/contact-team.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  public isCollapsed = true;

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    var html = document.getElementsByTagName("html")[0];
    html.classList.add("auth-layout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-background");
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });

  }
  ngOnDestroy() {
    var html = document.getElementsByTagName("html")[0];
    html.classList.remove("auth-layout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("bg-background");
  }

  openContactModal() {
    const modalRef = this.modalService.open(ContactTeamComponent, {size: 'sm'});
  }
}
