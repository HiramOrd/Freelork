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
   * @param loginData User and Password
   */
  // TODO: Add encoding
  login(loginData: any): any {
    const body = new HttpParams()
      .set('email', loginData.email)
      .set('password', loginData.password);
    return this.http.get(API.SERVER + API.LOGIN, {params: body});
  }

  postTask(body: any): any {
    const formData = new FormData();
    for ( const key in body ) {
      formData.append(key, body[key]);
    }
    return this.http.post(API.SERVER + API.API + API.POST_TASK, formData);
  }

  // Pipe Example
  // postImage(idUser: number, Image: any): any{
  //   return this.http.post(API.SERVER + API.API + API.SAVE_IMAGE + idUser, {image: Image}, {observe: 'response'})
  //     .pipe(map((response) => response), catchError(  (error) => throwError(error)));
  // }
}
