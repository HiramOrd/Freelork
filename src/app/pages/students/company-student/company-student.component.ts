import { Component, OnInit } from '@angular/core';
import {DeleteGroupStudentComponent} from '../group-student/delete-group-student/delete-group-student.component';
import {DeleteCompanyStudentComponent} from './delete-company-student/delete-company-student.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastService} from '../../../utilities/toast.service';
import {HttpClientService} from '../../../services/http-client.service';
import {UtilitiesService} from '../../../utilities/utilities.service';
import {ModalDeleteProjectsComponent} from '../projects/modal-delete-projects/modal-delete-projects.component';
import {ModalAddProjectComponent} from '../projects/modal-add-project/modal-add-project.component';

@Component({
  selector: 'app-company-student',
  templateUrl: './company-student.component.html',
  styleUrls: ['./company-student.component.css']
})
export class CompanyStudentComponent implements OnInit {
  serviceData;

  constructor(private modalService: NgbModal,
  private  httpClientService: HttpClientService,
  private utilitiesService: UtilitiesService,
  private toastService: ToastService, ) { }

  ngOnInit(): void {
    this.getStudentCompany();
  }

  openModalDelete() {
    const modalRef = this.modalService.open(DeleteCompanyStudentComponent);
    modalRef.result.then( response => {
      if (response === 200) {
        this.getStudentCompany();
      }
    } ).catch();

  }

  getStudentCompany() {
    this.httpClientService.getStudentCompany(this.utilitiesService.getId()).subscribe( response => {
      this.serviceData = response;
      console.log(response);
    }, error => {
      console.warn(error);
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
    });
  }

  deleteStudentCompany (id: number) {
    const modalRef = this.modalService.open(DeleteCompanyStudentComponent);
    modalRef.componentInstance.id = id;
    modalRef.result.then( response => {
      if (response === 200) {
        this.serviceData = this.serviceData.filter(row => row.id !== id);
      }
    } ).catch();
  }

}
