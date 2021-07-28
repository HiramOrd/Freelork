import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientService} from '../../../../services/http-client.service';
import {UtilitiesService} from '../../../../utilities/utilities.service';
import {ToastService} from '../../../../utilities/toast.service';

@Component({
  selector: 'app-delete-group-student',
  templateUrl: './delete-group-student.component.html',
  styleUrls: ['./delete-group-student.component.css']
})
export class DeleteGroupStudentComponent implements OnInit {
  @Input() id;

  constructor(public activeModal: NgbActiveModal,
              private httpClientService: HttpClientService,
              private utilitiesService: UtilitiesService,
              private toastService: ToastService,) {
  }

  ngOnInit(): void {
  }

  deleteGroup() {
    this.httpClientService.deleteStudentClassroom(this.id).subscribe( response => {
      this.toastService.show('Se elimino correctamente' , { classname: 'bg-success text-white'});
      this.activeModal.close(this.id);
    }, error => {
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
      console.warn(error);
    });

  }
}
