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

  // TODO: Add encoding
  login(loginData: any): any {
    const body = new HttpParams()
      .set('email', loginData.email)
      .set('password', loginData.password);
    return this.http.get(API.SERVER + API.LOGIN, {params: body});
  }

  // Registrations
  registerAdmin(body: any): any {
    return this.http.post(API.SERVER + API.POST_ADMIN, body);
  }
  registerStudent(body: any): any {
    return this.http.post(API.SERVER + API.POST_STUDENT, body);
  }
  registerTeacher(body: any): any {
    return this.http.post(API.SERVER + API.POST_TEACHER, body);
  }
  registerCompany(body: any): any {
    return this.http.post(API.SERVER + API.POST_COMPANY, body);
  }

  // Task
  getTask(id: number): any {
    return this.http.get(API.SERVER + API.API + API.GET_TASK + id);
  }
  getTaskList(id: number): any {
    return this.http.get(API.SERVER + API.API + API.GET_TASK_LIST + id);
  }
  getTaskListByDate(id: number, date1, date2): any {
    return this.http.get(API.SERVER + API.API + API.GET_TASK_LIST + id + '/' + date1 + '/' + date2);
  }

  postTask(body: any): any {
    const formData = new FormData();
    for ( const key in body ) {
      formData.append(key, body[key]);
    }
    return this.http.post(API.SERVER + API.API + API.POST_TASK, formData);
  }

  // Profiles
  getStudentProfile(id: number): any {
    return this.http.get(API.SERVER + API.API + API.GET_STUDENT + id);
  }
  postStudentProfile(body: any): any {
    const formData = new FormData();
    for ( const key in body ) {
      formData.append(key, body[key]);
    }
    return this.http.put(API.SERVER + API.API + API.UPDATE_STUDENT, formData);
  }

  // Student Summary
  getStudentSummary(id: number): any {
    return this.http.get(API.SERVER + API.API + API.STUDENT_SUMMARY + id);
  }

  // Pipe Example
  // postImage(idUser: number, Image: any): any{
  //   return this.http.post(API.SERVER + API.API + API.SAVE_IMAGE + idUser, {image: Image}, {observe: 'response'})
  //     .pipe(map((response) => response), catchError(  (error) => throwError(error)));
  // }
}
