import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../../services/http-client.service';
import {UtilitiesService} from '../../../utilities/utilities.service';
import {ToastService} from '../../../utilities/toast.service';

@Component({
  selector: 'app-profile-teacher',
  templateUrl: './profile-teacher.component.html',
  styleUrls: ['./profile-teacher.component.css']
})
export class ProfileTeacherComponent implements OnInit {

  constructor(
    private httpClientService: HttpClientService,
    public utilitiesService: UtilitiesService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
  }

}
