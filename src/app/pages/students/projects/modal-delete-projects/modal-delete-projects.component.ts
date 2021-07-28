import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientService} from '../../../../services/http-client.service';
import {UtilitiesService} from '../../../../utilities/utilities.service';
import {ToastService} from '../../../../utilities/toast.service';


@Component({
  selector: 'app-modal-delete-projects',
  templateUrl: './modal-delete-projects.component.html',
  styleUrls: ['./modal-delete-projects.component.css']
})
export class ModalDeleteProjectsComponent implements OnInit {
  @Input() id;

  constructor(
    public activeModal: NgbActiveModal,
    private  httpClientService: HttpClientService,
    private utilitiesService: UtilitiesService,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
  }

  deleteProject() {
    this.httpClientService.deleteStudentProject(this.utilitiesService.getId(), this.id).subscribe( response => {
      this.toastService.show('Se ha desvinculado con exito' , { classname: 'bg-success text-white'});
      this.activeModal.close(200);
    }, error => {
      console.warn(error);
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
    });
  }
}
