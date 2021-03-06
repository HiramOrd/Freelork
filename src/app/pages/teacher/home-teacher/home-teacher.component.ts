import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {TableService} from '../../../utilities/tables/table.service';
import {Observable} from 'rxjs';
import {NgbdSortableHeader, SortEvent} from '../../../utilities/tables/sortable.directive';
import {StudentsService} from '../../students/students.service';
import {studentTasks} from '../../../variables/studentTasks';
import {UtilitiesService} from '../../../utilities/utilities.service';
import {ExportExcelService} from '../../../utilities/export-excel.service';
import {ToastService} from '../../../utilities/toast.service';
import {HttpClientService} from '../../../services/http-client.service';


@Component({
  selector: 'app-home-teacher',
  templateUrl: './home-teacher.component.html',
  styleUrls: ['./home-teacher.component.css'],
  providers: [TableService]
})
export class HomeTeacherComponent implements OnInit {
  serviceData;
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
    private  httpClientService: HttpClientService,
    // Table
    public tableService: TableService,
    public utilitiesService: UtilitiesService,
    public exportExcelService: ExportExcelService,
  ) {
  }

  ngOnInit(): void {
    this.getTaskSummary();
    this.arrayTable$ = this.tableService.arrayTable$;
    this.total$ = this.tableService.total$;
  }
  /* API for GET Summary Tasks in Dashboard Home Teacher */
  getTaskSummary () {
    this.httpClientService.getTaskSummary(this.utilitiesService.getId()).subscribe( response => {
      this.serviceData = response;
      console.log(response);
      this.setTableInfo(this.serviceData.registers);
    }, error => {
      console.warn(error);
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
    });
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
    this.setTableInfo(studentTasks);
  }

  changeFilter () {
    if (this.dateMaxRange === null) {
    } else if (this.dateMaxRange && this.dateMinRange) {
      this.setTableInfo(studentTasks);
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
   /*  arrayToExport = this.utilitiesService.deleteColumn('dateRegister', arrayToExport); */
    const dataForExcel = [];
    arrayToExport.forEach((row: any) => {
      dataForExcel.push(Object.values(row));
    });

    const reportData = {
      title: 'Estancias_' + type,
      data: dataForExcel,
      headers: ['Titulo', 'Fecha', 'Alumno', 'Empresa', 'Tiempo', 'Proyecto', 'Estado'],
      sizeColumns: [50, 10, 25, 15, 10, 20, 20]
    };

    this.exportExcelService.exportExcel(reportData);
  }
}
