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

  getName(): string {
    return localStorage.getItem('fullName');
  }
  getImage(): string {
    const image = localStorage.getItem('imageUrl');
    return (image !== 'null') ? image : '/assets/img/defaults/default-user.png';
  }

  setName(fullName: string) {
    localStorage.setItem('fullName', fullName);
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

  getRoleName(): string {
    let role = '';
    switch (this.getRole()) {
      case 0:
        role = 'Administrador';
        break;

      case 1:
        role = 'Estudiante';
        break;

      case 2:
        role = 'Profesor';
        break;

      case 3:
        role = 'Empresa';
        break;
    }
    return role;
  }

  dateToString (date, separator?): string {
    return (date) ?
      date.toISOString().slice(0, 10).replace(/-/g, separator ?? '-') :
      '';
  }

  deleteColumn(name: string, array: any[]): any[] {
      return array.map( object => {
        const objectCopy = {...object};
        delete objectCopy[name];
        return objectCopy;
      });
  }

  statusTaskToString(array, name) {
      return array.map( object => {
        const objectCopy = {...object};
        switch (objectCopy[name]) {
          case 1:
            objectCopy[name] = 'Rechazado';
            break;
          case 2:
            objectCopy[name] = 'Pendiente';
            break;
          case 3:
            objectCopy[name] = 'Aceptado';
            break;
          default:
            objectCopy[name] = 'Desconocido';
            break;
        }
        return objectCopy;
      });
  }
}
