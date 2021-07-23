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
   * @param loginData User and Password
   */
  login(loginData: any): any {
    return this.httpClientService.login(loginData);
  }

  /**
   * Method to log out
   */
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('id');
    localStorage.removeItem('fullName');
    this.router.navigate(['/guest/login']);
  }
}
