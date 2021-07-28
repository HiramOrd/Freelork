import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalDeleteProjectsComponent } from './modal-delete-projects/modal-delete-projects.component';
import {ModalAddProjectComponent} from './modal-add-project/modal-add-project.component';
import {HttpClientService} from '../../../services/http-client.service';
import {UtilitiesService} from '../../../utilities/utilities.service';
import {ToastService} from '../../../utilities/toast.service';

@Component({
  selector: 'app-projects',
  templateUrl: './students-projects.component.html',
  styleUrls: ['./students-projects.component.css']
})
export class StudentsProjectsComponent implements OnInit {
  serviceData;

  constructor(
    private modalService: NgbModal,
    private  httpClientService: HttpClientService,
    private utilitiesService: UtilitiesService,
    private toastService: ToastService
    ) {}

  ngOnInit(): void {
    this.getStudentProjects();
  }

  open() {
    const modalRef = this.modalService.open(ModalAddProjectComponent);
    modalRef.result.then( response => {
      if(response === 200) {
        this.getStudentProjects();
      }
    } ).catch();
  }

  deleteRegister(id: number) {
    const modalRef = this.modalService.open(ModalDeleteProjectsComponent);
    modalRef.componentInstance.id = id;
    modalRef.result.then( response => {
      if (response === 200) {
        this.serviceData = this.serviceData.filter(row => row.id !== id);
      }
    } ).catch();
  }

  getStudentProjects() {
    this.httpClientService.getStudentProjects(this.utilitiesService.getId()).subscribe( response => {
      this.serviceData = response;
      console.log(response);
    }, error => {
      console.warn(error);
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
    });
  }

}
