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

  constructor(
    private httpClientService: HttpClientService,
    public utilitiesService: UtilitiesService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
  }

}
