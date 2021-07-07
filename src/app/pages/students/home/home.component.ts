import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../students.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public studentsService: StudentsService) { }

  ngOnInit(): void {
  }

}
