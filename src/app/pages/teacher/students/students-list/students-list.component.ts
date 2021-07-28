import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {TableService} from '../../../../utilities/tables/table.service';
import {Observable} from 'rxjs';
import {NgbdSortableHeader, SortEvent} from '../../../../utilities/tables/sortable.directive';
import {studentList} from '../../../../variables/studentList';
import {StudentsService} from '../../../students/students.service';
import {UtilitiesService} from '../../../../utilities/utilities.service';
import {ExportExcelService} from '../../../../utilities/export-excel.service';
import {ToastService} from '../../../../utilities/toast.service';
import {HttpClientService} from '../../../../services/http-client.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
  providers: [TableService]
})
export class StudentsListComponent implements OnInit {
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
    private router: Router,
    // Table
    public tableService: TableService,
    public utilitiesService: UtilitiesService,
    public exportExcelService: ExportExcelService,
  ) {
  }

  ngOnInit(): void {
    this.arrayTable$ = this.tableService.arrayTable$;
    this.total$ = this.tableService.total$;
    if(this.router.url === '/dash/tch/students-list'){
      this.getAllStudents();
    }
    if(this.router.url === '/dash/comp/students'){
      this.getAllStudentsCompany();
    }
  }
  /* API for GET All Students in Dashboard StudentList Teacher */
  getAllStudents () {
    this.httpClientService.getAllStudents(this.utilitiesService.getId()).subscribe( response => {
      this.serviceData = response;
      this.setTableInfo(this.serviceData);
      /* console.log(this.serviceData); */
    }, error => {
      console.warn(error);
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
    });
  }

  getAllStudentsCompany() {
    this.httpClientService.getStudentsCompany(this.utilitiesService.getId()).subscribe( response => {
      this.serviceData = response;
      this.setTableInfo(this.serviceData);
      /* console.log(this.serviceData); */
    }, error => {
      console.warn(error);
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
    });
  }

  setTableInfo(arrayTable) {
    this.table = arrayTable;
   /*  this.table = this.utilitiesService.statusTaskToString(this.table, 'status'); */
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
/*
  resetFilters () {
    this.dateMinRange = null;
    this.dateMaxRange = null;
    this.tableService.searchTerm = '';
    this.setTableInfo(studentList);
  }

  changeFilter () {
    if (this.dateMaxRange === null) {
    } else if (this.dateMaxRange && this.dateMinRange) {
      this.setTableInfo(studentList);
    }
  } */

  exportAll() {
    // Endpoint To export
    this.exportToExcel('Todo');
  }
/*   exportByDate() {
    if (this.dateMaxRange && this.dateMinRange) {
      // Endpoint To export
      this.exportToExcel('Por fecha');
    } else {
      this.toastService.show('No tienes un rango de fechas seleccionado' , { classname: 'bg-danger text-white'});
    }
} */

  exportToExcel(type: string) {
    let arrayToExport = this.table;
    arrayToExport = this.utilitiesService.deleteColumn('id', arrayToExport);
    arrayToExport = this.utilitiesService.deleteColumn('image', arrayToExport);
    const dataForExcel = [];
    arrayToExport.forEach((row: any) => {
      dataForExcel.push(Object.values(row));
    });

    if(this.router.url === '/dash/tch/students-list'){
      const reportData = {
        title: 'Lista_Alumnos_' + type,
        data: dataForExcel,
        headers: ['Matricula', 'Alumno', 'Grupo', 'Empresa', 'Hrs trabajadas'],
        sizeColumns: [15, 25, 15, 20, 15]
      };
      this.exportExcelService.exportExcel(reportData);
    }
    if(this.router.url === '/dash/comp/students'){
      const reportData = {
        title: 'Lista_Alumnos_' + type,
        data: dataForExcel,
        headers: ['Alumno', 'Matricula', 'Correo', 'Grupo', 'Hrs trabajadas'],
        sizeColumns: [25, 15, 25, 15, 15]
      };
      this.exportExcelService.exportExcel(reportData);
    }

    

    
  }
}
