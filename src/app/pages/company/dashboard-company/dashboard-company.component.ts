import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import {NgbdSortableHeader, SortEvent} from '../../../utilities/tables/sortable.directive';
import {StudentsService} from '../../students/students.service';
import {ToastService} from '../../../utilities/toast.service';
import {TableService} from '../../../utilities/tables/table.service';
import {UtilitiesService} from '../../../utilities/utilities.service';
import {studentTasks} from '../../../variables/studentTasks';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientService} from '../../../services/http-client.service';

@Component({
  selector: 'app-dashboard-company',
  templateUrl: './dashboard-company.component.html',
  styleUrls: ['./dashboard-company.component.css'],
  providers: [TableService]
})
export class DashboardCompanyComponent implements OnInit {
  serviceData;
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

    private modalService: NgbModal,
    private  httpClientService: HttpClientService,
  ) { }

  ngOnInit(): void {
    this.getCompanySummary();
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

  getCompanySummary () {
    this.httpClientService.getCompanySummary(this.utilitiesService.getId()).subscribe( response => {
      this.serviceData = response;
      this.setTableInfo(this.serviceData.registers);
      console.log(response);
    }, error => {
      console.warn(error);
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
    });
  }
}
