import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {API} from '../../environments/API';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { }

  /**
   * Get method that validates the login
   * @param user User field
   * @param password Password field
   */
  login(user: string, password: string): any {
    const body = new HttpParams()
      .set('user', user)
      // TODO: Add encoding
      .set('password', password);
    return this.http.get(API.SERVER + API.LOGIN + body);
  }

  // Pipe Example
  // postImage(idUser: number, Image: any): any{
  //   return this.http.post(API.SERVER + API.API + API.SAVE_IMAGE + idUser, {image: Image}, {observe: 'response'})
  //     .pipe(map((response) => response), catchError(  (error) => throwError(error)));
  // }
}
