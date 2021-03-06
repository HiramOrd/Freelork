import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UtilitiesService} from '../../../../utilities/utilities.service';
import {HttpClientService} from '../../../../services/http-client.service';
import {ToastService} from '../../../../utilities/toast.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-profile-teacher',
  templateUrl: './edit-profile-teacher.component.html',
  styleUrls: ['./edit-profile-teacher.component.css']
})
export class EditProfileTeacherComponent implements OnInit {
  teacherProfile: FormGroup;
  imageShow = null;

  constructor(
    private utilitiesService: UtilitiesService,
    private httpClientService: HttpClientService,
    private toastService: ToastService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.teacherProfile = new FormGroup({
      file: new FormControl(null, []),
    });
  }

  onFileChange(event) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.imageShow = reader.result;
    };
    this.teacherProfile.get('file').setValue(event.target.files[0]);
    reader.readAsDataURL(event.target.files[0]);
  }

  setTeacherData(event: FormGroup) {
    event.addControl('file', this.teacherProfile.get('file'));
    event.addControl('id', new FormControl(this.utilitiesService.getId()));

    const {userEntity} = event.getRawValue();
    const form = {...event.getRawValue(), ...userEntity};
    delete form.userEntity;
    form.name = form.fullName;
    form.idUser = form.id;
    console.log(form);

    this.httpClientService.postTeacherProfile(form).subscribe(response => {
      this.utilitiesService.setName(form.fullName);
      this.toastService.show('Perfil actualizado exitosamente' , { classname: 'bg-success text-white'});
      this.router.navigate(['/dash/tch/profile']);

    }, error => {
      console.log(error);
    });
  }

}
