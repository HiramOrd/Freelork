import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-group-student',
  templateUrl: './group-student.component.html',
  styleUrls: ['./group-student.component.css']
})
export class GroupStudentComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
