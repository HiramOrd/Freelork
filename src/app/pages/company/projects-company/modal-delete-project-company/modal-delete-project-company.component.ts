import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientService} from '../../../../services/http-client.service';
import {UtilitiesService} from '../../../../utilities/utilities.service';
import {ToastService} from '../../../../utilities/toast.service';

@Component({
  selector: 'app-modal-delete-project-company',
  templateUrl: './modal-delete-project-company.component.html',
  styleUrls: ['./modal-delete-project-company.component.css']
})
export class ModalDeleteProjectCompanyComponent implements OnInit {
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
    this.httpClientService.deleteProjectCompany(this.id).subscribe( response => {
      this.toastService.show('Se ha eliminado el proyecto' , { classname: 'bg-success text-white'});
      this.activeModal.close(200);
      console.log(response);
    }, error => {
      console.warn(error);
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
    });
  }

}
