import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClientService} from '../../../../services/http-client.service';
import {ToastService} from '../../../../utilities/toast.service';

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
  private origin: string;

  
  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private httpClientService: HttpClientService,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this.createGroupForm = new FormGroup({
      nameGroup: new FormControl(null, [Validators.required, Validators.minLength(6)]),

      career: new FormControl(null, [Validators.required]),
      grade: new FormControl(null, [Validators.required]),
      schedule: new FormControl(null, [Validators.required]),

      group: new FormControl(null, [Validators.required]),

      
      
    });

 

/*     this.route.queryParams.subscribe( params => {
      (params.origin) ? this.origin = params.origin : this.origin = '0';
      if (params.id) { this.getGroup(params.id); }
    }); */

  }

  confirmDataForm(){
    if(this.createGroupForm.get('career').value && this.createGroupForm.get('grade').value && this.createGroupForm.get('schedule').value){
    
      this.chargeCareer = this.createGroupForm.get('career').value;
      this.chargeGrade = this.createGroupForm.get('grade').value;
      this.chargeSchedule = this.createGroupForm.get('schedule').value;

      this.httpClientService.postGroup(this.chargeCareer, this.chargeGrade, this.chargeSchedule).subscribe( response => {
        this.groups = response;
        }, error => {
          console.warn(error);
          this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
      });
      
    }
  }


/* 
  getTaskSummary () {
    this.httpClientService.getTaskSummary(9).subscribe( response => {
      this.serviceData = response;
      this.setTableInfo(this.serviceData.registers);
    }, error => {
      console.warn(error);
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
    });
  } */

/*   getGroup(id: number) {
    this.httpClientService.getGroup(id).subscribe( response => {
      console.log(response);
    }, error => {
      console.warn(error);
      this.toastService.show('Error en el servidor, no se pudo cargar el contenido' , { classname: 'bg-danger text-white'});
    });
  }
 */
  return(): void {
    let route = '/dash/std/register';
    if (this.origin === '1') {
      route = '/dash/std/home';
    }
    this.router.navigate([route]).then(() => {} );
  }

  createGroupSubmit(): void {
    console.log(this.createGroupForm.getRawValue());
    this.getGroup = this.createGroupForm.getRawValue();
    delete this.getGroup.career;
    delete this.getGroup.grade;
    delete this.getGroup.schedule;
    

    console.log(this.getGroup);

   /*  (this.createGroupForm.valid) ? this.router.navigate(['/login']) : this.createGroupForm.markAllAsTouched(); */
  }

}
