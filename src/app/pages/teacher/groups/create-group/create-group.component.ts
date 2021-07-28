import {Component, ElementRef, OnInit} from '@angular/core';
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
    private el: ElementRef,
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
      console.log(this.createGroupForm.getRawValue());
      this.httpClientService.getGroup( this.career.value, this.grade.value, this.schedule.value).subscribe( response => {
        this.groups = response;
        }, error => {
          console.warn(error);
          this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
      });
    }
  }

  validateForm() {
    (this.createGroupForm.valid) ?
      this.createGroupSubmit() :  this.errorForm();
  }

  createGroupSubmit(): void {
    this.getGroup = this.createGroupForm.getRawValue();
    delete this.getGroup.career;
    delete this.getGroup.grade;
    delete this.getGroup.schedule;

    console.log(this.getGroup);
    this.httpClientService.registerGroup(this.getGroup).subscribe( response => {
      console.log(this.idGroup, this.getGroup.nameGroup, 1);
      this.toastService.show('Grupo creado exitosamente' , { classname: 'bg-success text-white'});
      this.router.navigate(['/dash/tch/groups']);
    }, (error) => {
      console.warn(error);
      this.toastService.show('Error en el servidor, intenta mas tarde' , { classname: 'bg-danger text-white'});
    } );
  }

  errorForm() {
    this.createGroupForm.markAllAsTouched();
    for (const key of Object.keys(this.createGroupForm.controls)) {
      if (this.createGroupForm.controls[key].invalid) {
        const invalidControl = this.el.nativeElement.querySelector('[formcontrolname="' + key + '"]');
        invalidControl.focus();
        break;
      }
    }
  }

}
