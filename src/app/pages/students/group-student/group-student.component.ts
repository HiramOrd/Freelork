import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {NgbdSortableHeader, SortEvent} from '../../../utilities/tables/sortable.directive';
import {TableService} from '../../../utilities/tables/table.service';
import {Observable} from 'rxjs';
import {COUNTRIES2} from '../../../utilities/tables/countries2';

@Component({
  selector: 'app-group-student',
  templateUrl: './group-student.component.html',
  styleUrls: ['./group-student.component.css'],
  providers: [TableService]
})
export class GroupStudentComponent implements OnInit {

  // Test
  arrayTable$: Observable<any[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public tableService: TableService) {
    // Test
    this.tableService.initService(COUNTRIES2);
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
