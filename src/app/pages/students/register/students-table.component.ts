import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {StudentsService} from '../students.service';
import {Observable} from 'rxjs';
import {NgbdSortableHeader, SortEvent} from '../../../utilities/tables/sortable.directive';
import {TableService} from '../../../utilities/tables/table.service';
import {COUNTRIES} from '../../../utilities/tables/countries';

@Component({
  selector: 'app-register',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css'],
  providers: [TableService]
})
export class StudentsTableComponent implements OnInit {
  today;
  dateMinRange;
  dateMaxRange;
  dateDisabled = true;
  public isCollapsed = true;

  // Test
  arrayTable$: Observable<any[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public studentsService: StudentsService, public tableService: TableService) {
    this.today = Date.now();
    this.dateMinRange = this.today;
    this.dateMaxRange = this.today;

    // Test
    this.tableService.initService(COUNTRIES);
    this.arrayTable$ = tableService.arrayTable$;
    this.total$ = tableService.total$;
  }

  ngOnInit(): void {
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
