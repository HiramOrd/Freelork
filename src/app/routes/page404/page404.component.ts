import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilitiesService} from '../../utilities/utilities.service';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {
  route = '';
  name = '';

  constructor(private utilitiesService: UtilitiesService) { }

  ngOnInit(): void {
    this.route = this.setRoute();
    this.name = this.setRouteName();
  }

  setRoute(): string {
    return this.utilitiesService.getRoleRoute() ?
      '/dash/' + this.utilitiesService.getRoleRoute() + 'home' : '/guest';
  }

  setRouteName(): string {
    return this.utilitiesService.getRoleRoute() ? 'Home' : 'Login';
  }
}
