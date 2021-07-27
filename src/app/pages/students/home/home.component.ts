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
  serviceData;
  counterProject = 0;
  projectsLength = 0;

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

  nextProject() {
    (this.counterProject < this.projectsLength - 1) ? this.counterProject++ : this.counterProject = 0;
  }

  previousProject() {
    (this.counterProject > 0) ? this.counterProject-- : this.counterProject = this.counterProject = this.projectsLength - 1;
  }

  getStudentSummary () {
    this.httpClientService.getStudentSummary(this.utilitiesService.getId()).subscribe( response => {
      this.serviceData = response;
      this.projectsLength = this.serviceData.projects.length;
      console.log(response);
    }, error => {
      console.warn(error);
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
    });
  }

}
