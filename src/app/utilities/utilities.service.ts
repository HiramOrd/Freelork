import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  getRole(): number {
    return parseInt(localStorage.getItem('role'), 10);
  }

  getId(): number {
    return parseInt(localStorage.getItem('id'), 10);
  }

  getRoleRoute(): string {
    let route = '';
    switch (this.getRole()) {
      case 0:
        route = 'adm/';
        break;

      case 1:
        route = 'std/';
        break;

      case 2:
        route = 'tch/';
        break;

      case 3:
        route = 'comp/';
        break;
    }
    return route;
  }

  dateToString (date, separator?): string {
    return (date) ?
      date.toISOString().slice(0, 10).replace(/-/g, separator ?? '-') :
      '';
  }
}
