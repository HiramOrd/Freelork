import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.css']
})
export class ProfileStudentComponent implements OnInit {
  // Temp
  email = '201900075@estudiantes.upqroo.edu.mx';
  name = 'Katherine Sarahid Gonzalez Ramirez';
  photo = null;
  // tslint:disable-next-line:max-line-length
  // photo = 'https://laverdadnoticias.com/__export/1611983421030/sites/laverdad/img/2021/01/30/wandavision_serie_wanda_maximoff_poderes.jpg_366579991.jpg';
  role = 'Estudiante';

  constructor() { }

  ngOnInit(): void {
  }

}
