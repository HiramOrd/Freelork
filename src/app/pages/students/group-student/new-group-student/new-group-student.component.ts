import {Component, OnInit} from '@angular/core';
import {TableService} from '../../../../utilities/tables/table.service';
import {Router} from '@angular/router';
import {HttpClientService} from '../../../../services/http-client.service';
import {UtilitiesService} from '../../../../utilities/utilities.service';
import {ToastService} from '../../../../utilities/toast.service';

@Component({
  selector: 'app-group-student',
  templateUrl: './new-group-student.component.html',
  styleUrls: ['./new-group-student.component.css'],
  providers: [TableService]
})
export class NewGroupStudentComponent implements OnInit {
  idClassroom;

  constructor(
    private router: Router,
    private httpClientService: HttpClientService,
    private utilitiesService: UtilitiesService,
    private toastService: ToastService
    ) {
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.idClassroom) {
      this.httpClientService.postStudentClassroom(this.utilitiesService.getId(), this.idClassroom).subscribe( response => {
        this.toastService.show('Has sido agregado exitosamente' , { classname: 'bg-success text-white'});
        this.router.navigate(['/dash/std/group']);
      }, error => {
        if (error.status == 417) {
          this.toastService.show('Codigo invalido, verificalo' , { classname: 'bg-danger text-white'});
        } else {
          this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
        }
        console.warn(error);
      });
    } else {
      this.toastService.show('Ingresa un codigo' , { classname: 'bg-danger text-white'});
    }

  }


}
