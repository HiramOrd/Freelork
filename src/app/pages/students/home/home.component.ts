import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../students.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalViewAdvisesComponent} from './modal-view-advises/modal-view-advises.component';
import {HttpClientService} from '../../../services/http-client.service';
import {UtilitiesService} from '../../../utilities/utilities.service';
import {ToastService} from '../../../utilities/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public studentsService: StudentsService,
    private modalService: NgbModal,
    private  httpClientService: HttpClientService,
    private utilitiesService: UtilitiesService,
    private toastService: ToastService,
    ) { }

  ngOnInit(): void {
    this.getStudentSummary();
  }

  viewAdviseModal(): void {
    const modalRef = this.modalService.open(ModalViewAdvisesComponent);
  }

  getStudentSummary () {
    this.httpClientService.getStudentSummary(this.utilitiesService.getId()).subscribe( response => {
      console.log(response);
    }, error => {
      console.warn(error);
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
    });
  }

}
