import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../../services/http-client.service';
import {UtilitiesService} from '../../../utilities/utilities.service';
import {ToastService} from '../../../utilities/toast.service';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.css']
})
export class ProfileStudentComponent implements OnInit {
  student;
  company;
  class;

  constructor(
    private httpClientService: HttpClientService,
    public utilitiesService: UtilitiesService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.getStudent();
    this.getStudentCompany();
    this.getStudentClassroom();
  }

  getStudent () {
    this.httpClientService.getStudentProfile(this.utilitiesService.getId()).subscribe( response => {
      console.log(response);
      this.student = response;
      this.utilitiesService.setImage(this.student.imageUrl);
    }, error => {
      console.warn(error);
      this.toastService.show('Error en el servidor, intenta más tarde' , { classname: 'bg-danger text-white'});
    });
  }

  getStudentCompany() {
    this.httpClientService.getStudentCompany(this.utilitiesService.getId()).subscribe( response => {
      this.company = response;
      console.log(response);
    }, error => {
        console.warn(error);
    });
  }

  getStudentClassroom() {
    this.httpClientService.getStudentClassroom(this.utilitiesService.getId()).subscribe( response => {
      this.class = response;
      console.log(response);
    }, error => {});
  }

}
