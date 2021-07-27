import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastService} from '../../../../utilities/toast.service';
import {HttpClientService} from '../../../../services/http-client.service';
import {UtilitiesService} from '../../../../utilities/utilities.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-modal-delete-register-student',
  templateUrl: './modal-delete-register-student.component.html',
  styleUrls: ['./modal-delete-register-student.component.css']
})
export class ModalDeleteRegisterStudentComponent implements OnInit {
  @Input() id;

  constructor(
    public activeModal: NgbActiveModal,
    private toastService: ToastService,
    private httpClientService: HttpClientService,
    public utilitiesService: UtilitiesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.id);
  }

  deleteRegister(): void {
    this.httpClientService.deleteStudentRegister(this.id).subscribe( response => {
      this.toastService.show('Se elimino correctamente' , { classname: 'bg-success text-white'});
      this.activeModal.close(this.id);
    }, error => {
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
      console.warn(error);
    });
  }

}
