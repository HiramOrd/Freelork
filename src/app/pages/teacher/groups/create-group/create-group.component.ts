import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  createGroupForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.createGroupForm = new FormGroup({
      nameGroup: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      career: new FormControl(null, [Validators.required]),
      grade: new FormControl(null, [Validators.required]),
      group: new FormControl(null, [Validators.required]),
      schedule: new FormControl(null, [Validators.required]),
    });

  }

  createGroupSubmit(): void {
    console.log(this.createGroupForm.getRawValue());
    (this.createGroupForm.valid) ? this.router.navigate(['/login']) : this.createGroupForm.markAllAsTouched();
  }

}
