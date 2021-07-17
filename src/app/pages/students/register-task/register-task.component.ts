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
  ondrag = false;
  borderActive = true;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.registerTaskForm = new FormGroup({
      imageFile: new FormControl(undefined, []),
      date: new FormControl('', [Validators.required]),
    });

    this.route.queryParams.subscribe( params => {
      (params.origin) ? this.origin = params.origin : this.origin = '0';
    });
  }

  get imageFile() {
    return this.registerTaskForm.get('imageFile');
  }

  registerTaskSubmit() {
  }

  deletePhoto(): void {
    this.imageShow = undefined;
  }

  onFileChanged(event) {
    this.getImage(event.target.files);
  }

  getImage(files) {
    if (files.length > 0) {
      const file = files[0];
      this.registerTaskForm.patchValue({
        imageFile: file
      });
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      this.imageShow = reader.result;
    };
    reader.readAsDataURL(this.imageFile.value);
  }

  dropHandler(ev) {
    ev.preventDefault();
    if (ev.dataTransfer.items) {
      for (let i = 0; i < ev.dataTransfer.items.length; i++) {
        console.log(ev.dataTransfer.items[i]);
        if (ev.dataTransfer.items[i].type.includes('image')) {
          const file = ev.dataTransfer.items[i].getAsFile();
          this.getImage([file]);
        }
      }
    } else {
      for (let i = 0; i < ev.dataTransfer.files.length; i++) {
        this.getImage([ev.dataTransfer.files[i]]);
      }
    }
    this.ondrag = false;
    if (ev.dataTransfer.items) {
      ev.dataTransfer.items.clear();
    } else {
      ev.dataTransfer.clearData();
    }
  }

  dragExit() {
    this.ondrag = false;
  }

  dragOverHandler(ev) {
    this.ondrag = true;
    ev.preventDefault();
  }

  return(): void {
    let route = '/dash/std/register';
    if (this.origin === '1') {
      route = '/dash/std/home';
    }
    this.router.navigate([route]).then(() => {} );
  }
}
