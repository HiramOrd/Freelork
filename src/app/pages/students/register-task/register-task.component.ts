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

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.registerTaskForm = new FormGroup({
      imageFile: new FormControl(null, []),
      date: new FormControl(null, [Validators.required]),
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
    console.clear();
    console.log(this.registerTaskForm.get('imageFile').value);
    const textFileAsBlob = new Blob([this.registerTaskForm.get('imageFile').value], {type: 'text/plain'});
    const fileNameToSaveAs = 'myNewFile.txt';
    const downloadLink = document.createElement('a');
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = 'My Hidden Link';
    window.URL = window.URL || window.webkitURL;
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    // if (this.imageFile.value !== null) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     console.log(reader.result);
    //   };
    //   reader.readAsDataURL(this.imageFile.value);
    // }

  }

  registerTaskSubmit() {
  }

  return(): void {
    let route = '/dash/std/register';
    if (this.origin === '1') {
      route = '/dash/std/home';
    }
    this.router.navigate([route]).then(() => {} );
  }
}
