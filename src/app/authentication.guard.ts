import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from './services/authentication.service';
import {UtilitiesService} from './utilities/utilities.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private utilitiesService: UtilitiesService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const roles = next.data.roles as Array<string>;
    const roleUser = this.utilitiesService.getRole();
    if (localStorage.getItem('token') && roleUser) {
      if (roles.some(role => role === roleUser.toString())) {
        return true;
      }
    } else {
      this.router.navigate(['/guest/login']);
      return false;
    }
  }
}
