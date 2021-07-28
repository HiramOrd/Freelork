import { Component, OnInit } from '@angular/core';
import {ModalAddProjectComponent} from '../../students/projects/modal-add-project/modal-add-project.component';
import {ModalDeleteProjectsComponent} from '../../students/projects/modal-delete-projects/modal-delete-projects.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalDeleteProjectCompanyComponent} from './modal-delete-project-company/modal-delete-project-company.component';
import {HttpClientService} from '../../../services/http-client.service';
import {UtilitiesService} from '../../../utilities/utilities.service';
import {ToastService} from '../../../utilities/toast.service';

@Component({
  selector: 'app-projects-company',
  templateUrl: './projects-company.component.html',
  styleUrls: ['./projects-company.component.css']
})
export class ProjectsCompanyComponent implements OnInit {
  serviceData;

  constructor(
    private modalService: NgbModal,
    private  httpClientService: HttpClientService,
    private utilitiesService: UtilitiesService,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this.getProjects();
  }

  open() {
    this.modalService.open(ModalAddProjectComponent);
  }
  getProjects () {
    this.httpClientService.getCompanyProjects(this.utilitiesService.getId()).subscribe( response => {
      this.serviceData = response;
      console.log(response);
    }, error => {
      console.warn(error);
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
    });
  }

  deleteRegister(id) {
    const modalRef = this.modalService.open(ModalDeleteProjectCompanyComponent);
    modalRef.componentInstance.id = id;
    modalRef.result.then( response => {
      if (response === 200) {
        this.serviceData = this.serviceData.filter( row => row.id !== id );
      }
    }).catch();
  }
}
