import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

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

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.today);
    this.registerTaskForm = new FormGroup({
      date: new FormControl(null, [Validators.required]),
      project: new FormControl(null, [Validators.required]),
      title: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      time: new FormControl(null, [Validators.required]),
      description: new FormControl(null, []),
      imageFile: new FormControl(null, []),
    });

    this.route.queryParams.subscribe( params => {
      (params.origin) ? this.origin = params.origin : this.origin = '0';
    });
  }

  get imageFile() {
    return this.registerTaskForm.get('imageFile') as FormControl;
  }

  getImage(event) {
    this.imageFile.setValue(event?.value ?? null);
  }

  postTask() {
    (this.registerTaskForm.valid) ? console.log('guardando...') :  this.registerTaskForm.markAllAsTouched();
    console.clear();
    console.log(this.registerTaskForm.getRawValue());
  }

  return(): void {
    let route = '/dash/std/register';
    if (this.origin === '1') {
      route = '/dash/std/home';
    }
    this.router.navigate([route]).then(() => {} );
  }
}
