import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalDeleteProjectsComponent} from '../../../students/projects/modal-delete-projects/modal-delete-projects.component';
import {HttpClientService} from '../../../../services/http-client.service';
import {UtilitiesService} from '../../../../utilities/utilities.service';
import {ToastService} from '../../../../utilities/toast.service';

@Component({
  selector: 'app-modal-delete-group',
  templateUrl: './modal-delete-group.component.html',
  styleUrls: ['./modal-delete-group.component.css']
})
export class ModalDeleteGroupComponent implements OnInit {
  @Input() id;

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private  httpClientService: HttpClientService,
    private utilitiesService: UtilitiesService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
  }

  deleteGroup() {
    console.log(this.id);
    this.httpClientService.deleteGroup(this.id).subscribe( response => {
      this.toastService.show('Se ha eliminado con exito' , { classname: 'bg-success text-white'});
      this.activeModal.close(200);
    }, error => {
      console.warn(error);
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
    });
  }

}
