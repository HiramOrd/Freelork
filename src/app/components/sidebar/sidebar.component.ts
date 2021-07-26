import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UtilitiesService} from '../../utilities/utilities.service';

declare interface RouteInfo {
    role: string;
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { role: '1', path: 'std/home', title: 'Dashboard',  icon: 'ni-books text-primary', class: '' },
  { role: '1', path: 'std/register', title: 'Registro',  icon: 'ni-bullet-list-67 text-primary', class: '' },
  { role: '1', path: 'std/projects', title: 'Proyectos',  icon: 'ni-archive-2 text-primary', class: '' },
  { role: '1', path: 'std/company', title: 'Empresa',  icon: 'ni-building text-primary', class: '' },
  { role: '1', path: 'std/group', title: 'Grupo',  icon: 'fas fa-users text-primary', class: '' },
  { role: '1', path: 'std/profile', title: 'Perfil',  icon: 'ni-single-02 text-primary', class: '' },

  { role: '2', path: 'tch/home', title: 'Dashboard',  icon: 'ni-books text-primary', class: '' },
  { role: '2', path: 'tch/groups', title: 'Grupos',  icon: 'fas fa-users text-primary', class: '' },
  { role: '2', path: 'tch/students-list', title: 'Estudiantes',  icon: 'ni-hat-3 text-primary', class: '' },
  { role: '2', path: 'tch/profile', title: 'Perfil',  icon: 'ni-single-02 text-primary', class: ''  },

  { role: '3', path: 'comp/home', title: 'Dashboard',  icon: 'ni-books text-primary', class: ''  },
  { role: '3', path: 'comp/projects', title: 'Proyectos',  icon: 'ni-archive-2 text-primary', class: ''  },
  { role: '3', path: 'comp/all-list', title: 'Tareas',  icon: 'ni-ui-04 text-primary', class: ''  },
  { role: '3', path: 'comp/students', title: 'Estudiantes',  icon: 'ni-hat-3 text-primary', class: ''  },
  { role: '3', path: 'comp/profile', title: 'Perfil',  icon: 'ni-single-02 text-primary', class: ''  },

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
