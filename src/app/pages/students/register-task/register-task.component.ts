import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClientService} from '../../../services/http-client.service';

@Component({
  selector: 'app-register-task',
  templateUrl: './register-task.component.html',
  styleUrls: ['./register-task.component.css']
})
export class RegisterTaskComponent implements OnInit {
  public registerTaskForm: FormGroup;
  public imageShow;
  private origin: string;
  public today = Date.now();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    // console.log(this.today);
    this.registerTaskForm = new FormGroup({
      // NULL Default
      id: new FormControl(null),
      idUser: new FormControl(1, [Validators.required]),
      dateRegister: new FormControl(null, [Validators.required]),
      idProject: new FormControl(null, [Validators.required]),
      title: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      timeRegister: new FormControl(null, [Validators.required]),
      description: new FormControl(null, []), // Se manda como vacio y no nulo
      file: new FormControl(null, []),
    });

    this.route.queryParams.subscribe( params => {
      (params.origin) ? this.origin = params.origin : this.origin = '0';
    });
  }

  get file() {
    return this.registerTaskForm.get('file') as FormControl;
  }
  get dateRegister() {
    return this.registerTaskForm.get('dateRegister') as FormControl;
  }

  getImage(event) {
    this.file.setValue(event?.value ?? null);
  }


  validateForm() {
    (this.registerTaskForm.valid) ?
      this.postTask() :  this.registerTaskForm.markAllAsTouched();
  }

  postTask() {
    this.httpClientService.postTask(this.registerTaskForm.getRawValue()).subscribe( response => {
      console.log('Accepted');
      console.log(response);
    }, (error) => {
      console.log('Error');
      console.log(error.status);
    } );
  }

  return(): void {
    let route = '/dash/std/register';
    if (this.origin === '1') {
      route = '/dash/std/home';
    }
    this.router.navigate([route]).then(() => {} );
  }
}
