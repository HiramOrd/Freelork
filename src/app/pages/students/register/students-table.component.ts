import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {StudentsService} from '../students.service';
import {Observable} from 'rxjs';
import {NgbdSortableHeader, SortEvent} from '../../../utilities/tables/sortable.directive';
import {TableService} from '../../../utilities/tables/table.service';
import {Tasks} from '../../../variables/tasks';
import {COUNTRIES2} from '../../../variables/countries2';
import {UtilitiesService} from '../../../utilities/utilities.service';
import {ExportExcelService} from '../../../utilities/export-excel.service';
import {ToastService} from '../../../utilities/toast.service';

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
  table;
  arrayTable$: Observable<any[]>;
  total$: Observable<number>;
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    public studentsService: StudentsService,
    private toastService: ToastService,
    // Table
    public tableService: TableService,
    public utilitiesService: UtilitiesService,
    public exportExcelService: ExportExcelService,
  ) {
  }

  ngOnInit(): void {
    this.setTableInfo(Tasks);
    this.arrayTable$ = this.tableService.arrayTable$;
    this.total$ = this.tableService.total$;
  }

  setTableInfo(arrayTable) {
    this.table = arrayTable;
    this.table = this.utilitiesService.statusTaskToString(this.table, 'status');
    this.tableService.initService(this.table);
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

  exportAll() {
    // Endpoint To export
    this.exportToExcel('Todo');
  }
  exportByDate() {
    if (this.dateMaxRange && this.dateMinRange) {
      // Endpoint To export
      this.exportToExcel('Por fecha');
    } else {
      this.toastService.show('No tienes un rango de fechas seleccionado' , { classname: 'bg-danger text-white'});
    }
}

  exportToExcel(type: string) {
    let arrayToExport = this.table;
    arrayToExport = this.utilitiesService.deleteColumn('id', arrayToExport);
    arrayToExport = this.utilitiesService.deleteColumn('idProject', arrayToExport);
    const dataForExcel = [];
    arrayToExport.forEach((row: any) => {
      dataForExcel.push(Object.values(row));
    });

    const reportData = {
      title: 'Estancias_' + type,
      data: dataForExcel,
      headers: ['Titulo', 'Proyecto', 'Fecha', 'Horas', 'Estado'],
      sizeColumns: [50, 25, 15, 10, 15]
    };

    this.exportExcelService.exportExcel(reportData);
  }
}
