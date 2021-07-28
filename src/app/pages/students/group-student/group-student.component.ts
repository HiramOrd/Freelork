import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ModalViewRegisterStudentComponent} from '../register/modal-view-register-student/modal-view-register-student.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DeleteGroupStudentComponent} from './delete-group-student/delete-group-student.component';
import {HttpClientService} from '../../../services/http-client.service';
import {UtilitiesService} from '../../../utilities/utilities.service';
import {ToastService} from '../../../utilities/toast.service';
import {DeleteCompanyStudentComponent} from '../company-student/delete-company-student/delete-company-student.component';

@Component({
  selector: 'app-group-student',
  templateUrl: './group-student.component.html',
  styleUrls: ['./group-student.component.css']
})
export class GroupStudentComponent implements OnInit {
  serviceData;

  constructor(
    public router: Router,
    private modalService: NgbModal,
    private httpClientService: HttpClientService,
    private utilitiesService: UtilitiesService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.getStudentClassroom();
  }

  openModalDelete() {
    const modalRef = this.modalService.open(DeleteGroupStudentComponent);
    modalRef.componentInstance.id = this.utilitiesService.getId();
  }



  getStudentClassroom() {
    this.httpClientService.getStudentClassroom(this.utilitiesService.getId()).subscribe( response => {
      this.serviceData = response;
      console.log(response);
    }, error => {
      if ( error !== 200 ) {
        this.router.navigate(['dash/std/group/new']);
      } else {
        console.warn(error);
        this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
      }
    });
  }

  deleteStudentClassroom(id: number) {
    const modalRef = this.modalService.open(DeleteGroupStudentComponent);
    modalRef.componentInstance.id = id;
    modalRef.result.then( response => {
      if (response === 200) {
        this.serviceData = this.serviceData.filter(row => row.id !== id);
      }
    } ).catch();
  }
}
