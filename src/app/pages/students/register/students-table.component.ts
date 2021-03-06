import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {StudentsService} from '../students.service';
import {Observable} from 'rxjs';
import {NgbdSortableHeader, SortEvent} from '../../../utilities/tables/sortable.directive';
import {TableService} from '../../../utilities/tables/table.service';
import {UtilitiesService} from '../../../utilities/utilities.service';
import {ExportExcelService} from '../../../utilities/export-excel.service';
import {ToastService} from '../../../utilities/toast.service';
import {HttpClientService} from '../../../services/http-client.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalDeleteRegisterStudentComponent} from './modal-delete-register-student/modal-delete-register-student.component';

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
    private httpClientService: HttpClientService,
    private modalService: NgbModal,
    // Table
    public tableService: TableService,
    public utilitiesService: UtilitiesService,
    public exportExcelService: ExportExcelService,
  ) {
  }

  ngOnInit(): void {
    this.getTaskListAll();
    this.arrayTable$ = this.tableService.arrayTable$;
    this.total$ = this.tableService.total$;
  }

  getTaskListAll() {
    this.httpClientService.getTaskList(this.utilitiesService.getId()).subscribe( response => {
      console.log(response);
      this.setTableInfo(response);
    }, error => {
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
      console.warn(error);
    });
  }
  getTaskListByDate() {
    this.httpClientService.getTaskListByDate(this.utilitiesService.getId(), this.dateMinRange, this.dateMaxRange).subscribe( response => {
      this.setTableInfo(response);
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

  refreshTableInfo(arrayTable) {
    this.table = arrayTable;
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
        this.exportToExcel('todo', table );
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

  openModal(data) {
    this.studentsService.viewRegister(data.id).then( response => {
      if (response > 0) {
        const modalRef = this.modalService.open(ModalDeleteRegisterStudentComponent);
        modalRef.componentInstance.id = response;
        modalRef.result.then( result => {
            const resultTable = this.table.filter(row => row.id !== result);
          this.refreshTableInfo(resultTable);
        }).catch();
      }
    }).catch();
  }
}
