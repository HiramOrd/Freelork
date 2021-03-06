import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalDeleteRegisterStudentComponent } from '../modal-delete-register-student/modal-delete-register-student.component';
import {ToastService} from '../../../../utilities/toast.service';
import {HttpClientService} from '../../../../services/http-client.service';
import {UtilitiesService} from '../../../../utilities/utilities.service';

@Component({
  selector: 'app-modal-view-register-student',
  templateUrl: './modal-view-register-student.component.html',
  styleUrls: ['./modal-view-register-student.component.css']
})
export class ModalViewRegisterStudentComponent implements OnInit {
  @Input() id;
  @Input() origin;
  serviceData;
  status;

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private toastService: ToastService,
    private httpClientService: HttpClientService,
    public utilitiesService: UtilitiesService
  ) { }

  ngOnInit(): void {
    this.getTask(this.id);
  }

  getTask(id: number) {
    this.httpClientService.getTask(id).subscribe( response => {
      this.serviceData = response;
      console.log(response);
    }, error => {
      console.warn(error);
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
    });
  }

  changeStatusTask(status: number) {
    this.httpClientService.changeStatusTask(this.id, status).subscribe( response => {
      console.log(response);
      this.toastService.show('Estado modificado exitosamente' , { classname: 'bg-success text-white'});
      this.activeModal.close(250);
    }, error => {
      console.warn(error);
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
    });
  }

  deleteRegister() {
    this.activeModal.close(this.id);
  }

}
