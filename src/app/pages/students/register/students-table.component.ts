import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {StudentsService} from '../students.service';
import {Observable} from 'rxjs';
import {NgbdSortableHeader, SortEvent} from '../../../utilities/tables/sortable.directive';
import {TableService} from '../../../utilities/tables/table.service';
import {Tasks} from '../../../variables/tasks';
import {COUNTRIES2} from '../../../variables/countries2';
import {UtilitiesService} from '../../../utilities/utilities.service';

@Component({
  selector: 'app-register',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css'],
  providers: [TableService]
})
export class StudentsTableComponent implements OnInit {
  today = new Date();
  dateMinRange = null;
  dateMaxRange = null;
  public isCollapsed = true;

  // Table
  arrayTable$: Observable<any[]>;
  total$: Observable<number>;
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public studentsService: StudentsService, public tableService: TableService, public utilitiesService: UtilitiesService) {
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

  resetFilters () {
    this.dateMinRange = null;
    this.dateMaxRange = null;
    this.tableService.searchTerm = '';
    this.setTableInfo(Tasks);
  }

  changeFilter () {
    if (this.dateMaxRange === null) {
    } else if (this.dateMaxRange && this.dateMinRange) {
      this.setTableInfo(COUNTRIES2);
    }
  }
}
