import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  createGroupForm : FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.createGroupForm = new FormGroup({
      nameGroup: new FormControl('', [Validators.required, Validators.minLength(9)]),
      career: new FormControl('', [Validators.required]),
    });

  }

  createGroupSubmit(){
   /*  console.log(this.createGroupForm.getRawValue()); */
  }

}
