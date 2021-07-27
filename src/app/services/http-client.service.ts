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

  // Teacher Summary
  getTaskSummary(id: number) {
    return this.http.get(API.SERVER + API.API + API.GET_TEACHER + API.GET_SUMMARY_LIST + id);
  }
  getAllGroups (id: number) {
    return this.http.get(API.SERVER + API.API + API.GET_TEACHER + API.GET_GROUPS + id);
  }

  // Teacher
  getAllStudents(id: number) {
    return this.http.get(API.SERVER + API.API + API.GET_TEACHER + API.GET_ALL_STUDENTS + id);
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
  // Student Projects

  getStudentProjects(id: number): any {
    return this.http.get(API.SERVER + API.API + API.GET_STUDENT_PROJECTS + id);
  }

  getCompanyProject(id: number): any {
    return this.http.get(API.SERVER + API.API + API.GET_COMPANY_PROJECT + id);
  }

  postStudentProject(idStudent: number, idProject: number): any {
    return this.http.get(API.SERVER + API.API + API.POST_PROJECT + idStudent + API.POST_PROJECT2 + idProject );
  }

  deleteStudentProject(idStudent: number, idProject: number): any {
    return this.http.get(API.SERVER + API.API + API.DELETE_PROJECT + idStudent + API.DELETE_PROJECT2 + idProject );
  }

  deleteStudentRegister(idRegister: number): any {
    return this.http.put(API.SERVER + API.API + API.DELETE_REGISTER + idRegister, null );
  }

  getStudentCompany(id: number): any {
    return this.http.get(API.SERVER + API.API + API.GET_STUDENT_COMPANY + id);
  }

  postStudentCompany(idStudent: number, idCompany: number): any {
    return this.http.get(API.SERVER + API.API + API.POST_STUDENT_COMPANY + idStudent + API.POST_STUDENT_COMPANY2 + idCompany );
  }

  getStudentClassroom(id: number): any {
    return this.http.get(API.SERVER + API.API + API.GET_STUDENT_CLASSROOM + id);
  }

  postStudentClassroom(idStudent: number, idClassroom: number): any {
    return this.http.get(API.SERVER + API.API + API.POST_STUDENT_CLASSROOM + idStudent + API.POST_STUDENT_CLASSROOM2 + idClassroom );
  }
  // Pipe Example
  // postImage(idUser: number, Image: any): any{
  //   return this.http.post(API.SERVER + API.API + API.SAVE_IMAGE + idUser, {image: Image}, {observe: 'response'})
  //     .pipe(map((response) => response), catchError(  (error) => throwError(error)));
  // }
}
