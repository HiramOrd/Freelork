import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientService} from '../../../../services/http-client.service';
import {UtilitiesService} from '../../../../utilities/utilities.service';
import {ToastService} from '../../../../utilities/toast.service';

@Component({
  selector: 'app-delete-company-student',
  templateUrl: './delete-company-student.component.html',
  styleUrls: ['./delete-company-student.component.css']
})
export class DeleteCompanyStudentComponent implements OnInit {
  @Input() id;

  constructor(public activeModal: NgbActiveModal,
              private  httpClientService: HttpClientService,
              private utilitiesService: UtilitiesService,
              private toastService: ToastService, ) { }

  ngOnInit(): void {
  }

  deleteCompany() {
    this.httpClientService.deleteStudentCompany(this.utilitiesService.getId(), this.id).subscribe( response => {
      this.toastService.show('Se ha desvinculado con exito' , { classname: 'bg-success text-white'});
      this.activeModal.close(200);
    }, error => {
      console.warn(error);
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
    });
  }
}
