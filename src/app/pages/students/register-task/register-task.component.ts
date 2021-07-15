import { Component, OnInit, ViewChild, ElementRef, Renderer2} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register-task',
  templateUrl: './register-task.component.html',
  styleUrls: ['./register-task.component.css']
})
export class RegisterTaskComponent implements OnInit {
  registerTaskForm: FormGroup;
  @ViewChild('newPhoto') newPhoto: ElementRef;
  file:any;
  imageShow:any;
  origin;

  constructor(private renderer: Renderer2, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe( params => {
      (params.origin) ? this.origin = params.origin : this.origin = 0;
    });
  }
  registerTaskSubmit(){

  }

  chargePhoto(){
    this.newPhoto.nativeElement.click();
  }

  deletePhoto(): void {
    this.imageShow = undefined;
  }

  onFileChanged(event) {
  this.file = event.target.files[0]
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => {
    this.imageShow = (<FileReader>event.target).result;
    }
  }

  return(): void {
    let route = '/dash/std/register';
    if (this.origin === '1') {
      route = '/dash/std/home';
    }
    this.router.navigate([route]);
  }
}
