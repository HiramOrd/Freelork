import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../../../services/http-client.service';
import {UtilitiesService} from '../../../../utilities/utilities.service';
import {ToastService} from '../../../../utilities/toast.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-company-student',
  templateUrl: './new-company-student.component.html',
  styleUrls: ['./new-company-student.component.css']
})
export class NewCompanyStudentComponent implements OnInit {
  companyId = null;
  serviceData;

  constructor(
    private httpClientService: HttpClientService,
    private utilitiesService: UtilitiesService,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCompanyList();
  }

  click() {
  }

  getCompanyList() {
    this.httpClientService.getCompaniesList().subscribe( response => {
      this.serviceData = response;
      console.log(response);
    }, error => {
      console.warn(error);
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
    });
  }

  postCompany () {
    if ( this.companyId ) {
      this.httpClientService.postStudentCompany( this.utilitiesService.getId(), this.companyId).subscribe( response => {
        this.toastService.show('Se ha agregado exitosamente' , { classname: 'bg-success text-white'});
        this.router.navigate(['/dash/std/company']);
      }, error => {
        console.warn(error);
        this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
      });
    } else {
      this.toastService.show('Ingresa una empresa' , { classname: 'bg-danger text-white'});
    }
  }

}
