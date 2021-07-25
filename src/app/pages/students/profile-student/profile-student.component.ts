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
  // Temp
  email = '201900075@estudiantes.upqroo.edu.mx';
  name = 'Katherine Sarahid Gonzalez Ramirez';
  photo = null;
  // tslint:disable-next-line:max-line-length
  // photo = 'https://laverdadnoticias.com/__export/1611983421030/sites/laverdad/img/2021/01/30/wandavision_serie_wanda_maximoff_poderes.jpg_366579991.jpg';
  role = 'Estudiante';

  constructor(
    private httpClientService: HttpClientService,
    public utilitiesService: UtilitiesService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent () {
    this.httpClientService.getStudentProfile(this.utilitiesService.getId()).subscribe( response => {
      console.log(response);
      this.student = response;
    }, error => {
      console.warn(error);
      this.toastService.show('Error en el servidor, intenta más tarde' , { classname: 'bg-danger text-white'});
    });
  }

}
