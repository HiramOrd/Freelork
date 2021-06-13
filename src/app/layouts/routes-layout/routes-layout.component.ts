import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routes-layout',
  templateUrl: './routes-layout.component.html',
  styleUrls: ['./routes-layout.component.css']
})
export class RoutesLayoutComponent implements OnInit {
  test: Date = new Date();
  public isCollapsed = true;

  constructor(private router: Router) { }

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

}
