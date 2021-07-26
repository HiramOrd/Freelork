import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UtilitiesService} from '../../../../utilities/utilities.service';
import {HttpClientService} from '../../../../services/http-client.service';
import {ToastService} from '../../../../utilities/toast.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-profile-company',
  templateUrl: './edit-profile-company.component.html',
  styleUrls: ['./edit-profile-company.component.css']
})
export class EditProfileCompanyComponent implements OnInit {
  companyProfile: FormGroup;
  imageShow = null;

  constructor(
    private utilitiesService: UtilitiesService,
    private httpClientService: HttpClientService,
    private toastService: ToastService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.companyProfile = new FormGroup({
      file: new FormControl(null, []),
    });
  }

  onFileChange(event) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.imageShow = reader.result;
    };
    this.companyProfile.get('file').setValue(event.target.files[0]);
    reader.readAsDataURL(event.target.files[0]);
  }

  setCompanyData(event: FormGroup) {
    event.addControl('file', this.companyProfile.get('file'));
    event.addControl('id', new FormControl(this.utilitiesService.getId()));
    const {userEntity} = event.getRawValue();
    const form = {...event.getRawValue(), ...userEntity};
    delete form.userEntity;
    console.log(form);

    // this.httpClientService.postStudentProfile(form).subscribe(response => {
    //   this.utilitiesService.setName(form.fullName);
    //   this.toastService.show('Perfil actualizado exitosamente' , { classname: 'bg-success text-white'});
    //   this.router.navigate(['/dash/std/profile']);
    //
    // }, error => {
    //   console.log(error);
    // });
  }

}
