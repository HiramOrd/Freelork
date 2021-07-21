import {Component, OnInit} from '@angular/core';
import {TableService} from '../../../../utilities/tables/table.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-group-student',
  templateUrl: './new-group-student.component.html',
  styleUrls: ['./new-group-student.component.css'],
  providers: [TableService]
})
export class NewGroupStudentComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  submitForm() {
    this.router.navigate(['/dash/std/group']);
  }
}
