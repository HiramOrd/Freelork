import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UtilitiesService} from '../../../../utilities/utilities.service';

@Component({
  selector: 'app-edit-profile-student',
  templateUrl: './edit-profile-student.component.html',
  styleUrls: ['./edit-profile-student.component.css']
})
export class EditProfileStudentComponent implements OnInit {
  studentProfile: FormGroup;
  imageShow = null;

  constructor(private utilitiesService: UtilitiesService) { }

  ngOnInit(): void {
    this.studentProfile = new FormGroup({
      file: new FormControl(null, []),
    });
  }

  onFileChange(event) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.imageShow = reader.result;
    };
    this.studentProfile.get('file').setValue(event.target.files[0]);
    reader.readAsDataURL(event.target.files[0]);
  }

  setStudentData(event: FormGroup) {
    event.addControl('file', this.studentProfile.get('file'));
    event.addControl('id', new FormControl(this.utilitiesService.getId()));
    console.log('Returned: ');
    console.log(event.getRawValue());
  }

}
