import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../../services/http-client.service';
import {UtilitiesService} from '../../../utilities/utilities.service';
import {ToastService} from '../../../utilities/toast.service';

@Component({
  selector: 'app-profile-company',
  templateUrl: './profile-company.component.html',
  styleUrls: ['./profile-company.component.css']
})
export class ProfileCompanyComponent implements OnInit {
  serviceData;

  constructor(
    private httpClientService: HttpClientService,
    public utilitiesService: UtilitiesService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany () {
    this.httpClientService.getCompanyProfile(this.utilitiesService.getId()).subscribe( response => {
      console.log(response);
      this.serviceData = response;
      this.utilitiesService.setImage(this.serviceData.image);
    }, error => {
      console.warn(error);
      this.toastService.show('Error en el servidor, intenta más tarde' , { classname: 'bg-danger text-white'});
    });
  }

}
