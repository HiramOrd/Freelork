import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {StudentsService} from '../students.service';
import {Observable} from 'rxjs';
import {NgbdSortableHeader, SortEvent} from '../../../utilities/tables/sortable.directive';
import {CountryService} from '../../../utilities/tables/country.service';

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
  public isCollapsed = true;

  // Test
  arrayTable$: Observable<any[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public studentsService: StudentsService, public service: CountryService) {
    this.today = Date.now();
    this.dateMinRange = this.today;
    this.dateMaxRange = this.today;

    // Test
    this.arrayTable$ = service.arrayTable$;
    this.total$ = service.total$;
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

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
