import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClientService} from '../../../../services/http-client.service';
import {ToastService} from '../../../../utilities/toast.service';
import {UtilitiesService} from '../../../../utilities/utilities.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  createGroupForm: FormGroup;
  chargeCareer;
  chargeGrade;
  chargeSchedule;
  groups;
  getGroup;
  idGroup;
  sendClassroom;
  private origin: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpClientService: HttpClientService,
    private toastService: ToastService,
    public utilitiesService: UtilitiesService,
  ) { }

  ngOnInit(): void {
    this.createGroupForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      career: new FormControl(null, [Validators.required]),
      grade: new FormControl(null, [Validators.required]),
      schedule: new FormControl(null, [Validators.required]),
      idClazz: new FormControl(null, [Validators.required]),
      idUser: new FormControl(this.utilitiesService.getId(), [Validators.required]),
    });
  }

  get career() {
    return this.createGroupForm.get('career') as FormControl;
  }
  get grade() {
    return this.createGroupForm.get('grade') as FormControl;
  }
  get schedule() {
    return this.createGroupForm.get('schedule') as FormControl;
  }

  confirmDataForm() {
    if (this.career.value && this.grade.value && this.schedule.value) {

      this.httpClientService.getGroup( this.career.value, this.grade.value, this.schedule.value).subscribe( response => {
        this.groups = response;
        console.log(this.groups);
        }, error => {
          console.warn(error);
          this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
      });
    }
  }

  return(): void {
    let route = '/dash/std/register';
    if (this.origin === '1') {
      route = '/dash/std/home';
    }
    this.router.navigate([route]).then(() => {} );
  }


  createGroupSubmit(): void {
    this.getGroup = this.createGroupForm.getRawValue();
    delete this.getGroup.career;
    delete this.getGroup.grade;
    delete this.getGroup.schedule;

    console.log(this.getGroup);
    this.httpClientService.registerGroup(this.idGroup, this.getGroup.nameGroup, this.utilitiesService.getId()).subscribe( response => {
      console.log(this.idGroup, this.getGroup.nameGroup, 1);
      this.toastService.show('Guardado Exitosamente' , { classname: 'bg-success text-white'});
      this.return();
    }, (error) => {
      console.warn(error);
      this.toastService.show('Error en el servidor, intenta mas tarde' , { classname: 'bg-danger text-white'});
    } );
  }

}
