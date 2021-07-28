import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import {NgbdSortableHeader, SortEvent} from '../../../utilities/tables/sortable.directive';
import {StudentsService} from '../../students/students.service';
import {ToastService} from '../../../utilities/toast.service';
import {HttpClientService} from '../../../services/http-client.service';
import {TableService} from '../../../utilities/tables/table.service';
import {UtilitiesService} from '../../../utilities/utilities.service';
import {ExportExcelService} from '../../../utilities/export-excel.service';
import {studentTasks} from '../../../variables/studentTasks';

@Component({
  selector: 'app-all-registers-company',
  templateUrl: './all-registers-company.component.html',
  styleUrls: ['./all-registers-company.component.css'],
  providers: [TableService]
})
export class AllRegistersCompanyComponent implements OnInit {
  today = new Date();
  dateMinRange = null;
  dateMaxRange = null;
  public isCollapsed = true;
  studentTasks;

  // Table
  table;
  arrayTable$: Observable<any[]>;
  total$: Observable<number>;
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    public studentsService: StudentsService,
    private toastService: ToastService,
    private httpClientService: HttpClientService,
    // Table
    public tableService: TableService,
    public utilitiesService: UtilitiesService,
    public exportExcelService: ExportExcelService,
  ) { }

  ngOnInit(): void {
    this.getTaskListAll();
    this.arrayTable$ = this.tableService.arrayTable$;
    this.total$ = this.tableService.total$;
  }

  getTaskListAll() {
    this.httpClientService.getTaskCompany(this.utilitiesService.getId()).subscribe( response => {
      this.studentTasks = response; 
      this.setTableInfo(this.studentTasks);
    }, error => {
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
      console.warn(error);
    });
  }
  getTaskListByDate() {
    this.httpClientService.getTaskListByDate(this.utilitiesService.getId(), this.dateMinRange, this.dateMaxRange).subscribe( response => {
      console.log(response);
      this.setTableInfo(this.studentTasks);
    }, error => {
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
      console.warn(error);
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
    this.getTaskListAll();
  }

  changeFilter () {
    if (this.dateMaxRange === null) {
    } else if (this.dateMaxRange && this.dateMinRange) {
      this.getTaskListByDate();
    }
  }

  exportAll() {
    if (this.dateMaxRange && this.dateMinRange) {
      this.httpClientService.getTaskList(this.utilitiesService.getId()).subscribe( response => {
        console.log(response);
        const table = this.utilitiesService.statusTaskToString(response, 'status');
        this.exportToExcel('todo', this.studentTasks );
      }, error => {
        this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
        console.warn(error);
      });
    } else {
      this.exportToExcel('todo', this.table);
    }
  }
  exportByDate() {
    if (this.dateMaxRange && this.dateMinRange) {
      this.exportToExcel('por_fecha', this.table);
    } else {
      this.toastService.show('No tienes un rango de fechas seleccionado' , { classname: 'bg-danger text-white'});
    }
  }

  exportToExcel(type: string, table) {
    let arrayToExport = table;
    arrayToExport = this.utilitiesService.deleteColumn('id', arrayToExport);
    arrayToExport = this.utilitiesService.deleteColumn('idProject', arrayToExport);
    const dataForExcel = [];
    arrayToExport.forEach((row: any) => {
      dataForExcel.push(Object.values(row));
    });

    const reportData = {
      title: 'Estancias_' + type,
      data: dataForExcel,
      headers: ['Titulo', 'Fecha', 'Horas', 'Proyecto', 'Estado'],
      sizeColumns: [50, 15, 10, 25, 15]
    };

    this.exportExcelService.exportExcel(reportData);
  }
}
