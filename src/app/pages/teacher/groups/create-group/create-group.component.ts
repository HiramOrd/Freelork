import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  createGroupForm : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createGroupForm = new FormGroup({
      nameGroup: new FormControl(null, [Validators.required, Validators.minLength(9)]),
      career: new FormControl(null, [Validators.required]),
    });

  }

  createGroupSubmit(){
   
  }

}
