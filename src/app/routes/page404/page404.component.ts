import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {
  route = {id: 0, name: 'Inicio', route: '/dash'};

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    switch (this.origin) {
      case 'register':
        this.route = {id: 1, name: 'Registro de usuario', route: '/guest/register'};
        break;

      case 'guest':
        this.route = {id: 2, name: 'Inicio de sesión', route: '/guest'};
        break;

      case 'dash':
        this.route = {id: 3, name: 'Dashboard', route: '/dash'};
        break;
    }
  }

  get origin() {
    return this.activatedRoute.snapshot.params.origin;
  }

}
