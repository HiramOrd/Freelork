import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {
  today;
  dateMinRange;
  dateMaxRange;
  dateDisabled = true;

  constructor() {
    this.today = Date.now();
    this.dateMinRange = this.today;
    this.dateMaxRange = this.today;
  }

  ngOnInit(): void {
  }

}
