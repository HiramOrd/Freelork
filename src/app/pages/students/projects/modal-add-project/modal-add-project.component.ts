import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal, NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';
import {HttpClientService} from '../../../../services/http-client.service';
import {UtilitiesService} from '../../../../utilities/utilities.service';
import {ToastService} from '../../../../utilities/toast.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modal-add-project',
  templateUrl: './modal-add-project.component.html',
  styleUrls: ['./modal-add-project.component.css']
})
export class ModalAddProjectComponent implements OnInit {
  serviceData;
  valueSelected = null;
  @ViewChild('instance', {static: true}) instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();
  model: any;

  constructor(
    public activeModal: NgbActiveModal,
    private httpClientService: HttpClientService,
    private utilitiesService: UtilitiesService,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects () {
    this.httpClientService.getCompanyProject(this.utilitiesService.getId()).subscribe( response => {
      this.serviceData = response;
      console.log(response);
      if (this.serviceData.length <= 0) {
        this.toastService.show('Primero registrate en una empresa' , { classname: 'bg-danger text-white'});
        this.activeModal.close(200);
        this.router.navigate(['dash/std/company']);
      }
    }, error => {
      console.warn(error);
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
    });
  }

  addProject() {
    if (this.valueSelected) {
      this.httpClientService.postStudentProject(this.utilitiesService.getId(), this.valueSelected).subscribe( response => {
        this.toastService.show('Se agregó el proyecto con éxito' , { classname: 'bg-success text-white'});
        this.activeModal.close(200);
      }, error => {
        console.warn(error);
        this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
      });
    } else {
      this.toastService.show('Selecciona un nuevo proyecto' , { classname: 'bg-danger text-white'});
    }

  }

}
