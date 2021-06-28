import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClientService} from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router, private httpClientService: HttpClientService) { }

  /**
   * Method to validate the login on the server
   * @param user User field
   * @param password Password field
   */
  login(user: string, password: string): any {
    return this.httpClientService.login(user, password);
  }

  /**
   * Method to log out
   */
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/guest/login']);
  }
}
