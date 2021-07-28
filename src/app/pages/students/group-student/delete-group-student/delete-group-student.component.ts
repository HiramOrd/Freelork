import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientService} from '../../../../services/http-client.service';
import {UtilitiesService} from '../../../../utilities/utilities.service';
import {ToastService} from '../../../../utilities/toast.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-group-student',
  templateUrl: './delete-group-student.component.html',
  styleUrls: ['./delete-group-student.component.css']
})
export class DeleteGroupStudentComponent implements OnInit {
  @Input() id;

  constructor(
    public activeModal: NgbActiveModal,
    private httpClientService: HttpClientService,
    private utilitiesService: UtilitiesService,
    private toastService: ToastService,
    public router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  deleteGroup() {
    console.log(this.id);
    this.httpClientService.deleteStudentClassroom(this.id).subscribe( response => {
      this.toastService.show('Se elimino correctamente' , { classname: 'bg-success text-white'});
      this.router.navigate(['/dash/std/group/new']);
      this.activeModal.close(this.id);
    }, error => {
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
      console.warn(error);
    });

  }
}
