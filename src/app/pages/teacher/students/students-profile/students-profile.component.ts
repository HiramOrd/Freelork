import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {TableService} from '../../../../utilities/tables/table.service';
import {Observable} from 'rxjs';
import {NgbdSortableHeader, SortEvent} from '../../../../utilities/tables/sortable.directive';
import {Tasks} from '../../../../variables/tasks';
import {StudentsService} from '../../../students/students.service';

@Component({
  selector: 'app-students-profile',
  templateUrl: './students-profile.component.html',
  styleUrls: ['./students-profile.component.css']
})
export class StudentsProfileComponent implements OnInit {

  today;
  dateMinRange;
  dateMaxRange;
  dateDisabled = true;
  public isCollapsed = true;

  // Table
  arrayTable$: Observable<any[]>;
  total$: Observable<number>;
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public studentsService: StudentsService, public tableService: TableService) {
    this.today = Date.now();
    this.dateMinRange = this.today;
    this.dateMaxRange = this.today;
  }

  ngOnInit(): void {
    this.setTableInfo(Tasks);
  }

  setTableInfo(arrayTable) {
    this.tableService.initService(arrayTable);
    this.arrayTable$ = this.tableService.arrayTable$;
    this.total$ = this.tableService.total$;
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.tableService.sortColumn = column;
    this.tableService.sortDirection = direction;
  }

}
