import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UtilitiesService} from '../../utilities/utilities.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'std/home', title: 'Estudiantes',  icon: '', class: 'font-weight-bold' },
  { path: 'std/home', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
  { path: 'std/register', title: 'Registro',  icon: 'ni-bullet-list-67 text-primary', class: '' },
  { path: 'std/projects', title: 'Proyectos',  icon: 'ni-archive-2 text-primary', class: '' },
  { path: 'std/group', title: 'Grupo',  icon: 'ni-hat-3 text-primary', class: '' },
  { path: 'std/profile', title: 'Perfil',  icon: 'ni-single-02 text-primary', class: '' },

  { path: 'tch/home', title: 'Maestros',  icon: '', class: 'font-weight-bold' },
  { path: 'tch/home', title: 'Dashboard',  icon: 'ni-books text-primary', class: '' },
  { path: 'tch/groups', title: 'Grupos',  icon: 'ni-books text-primary', class: '' },
  { path: 'tch/students-list', title: 'Alumnos',  icon: 'ni-books text-primary', class: '' },
  // { path: 'std/register', title: 'Avisos',  icon: 'ni-notification-70 text-primary', class: '' },
  // {path: 'icons', title: 'Icons', icon: 'ni-planet text-blue', class: ''},
  // {path: 'maps', title: 'Maps', icon: 'ni-pin-3 text-orange', class: ''},
  // {path: 'user-profile', title: 'User profile', icon: 'ni-single-02 text-yellow', class: ''},
  // {path: 'tables', title: 'Tables', icon: 'ni-bullet-list-67 text-red', class: ''},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  roleRoute;

  constructor(private router: Router, public utilitiesService: UtilitiesService) { }

  ngOnInit() {
    this.roleRoute = this.utilitiesService.getRoleRoute();
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
