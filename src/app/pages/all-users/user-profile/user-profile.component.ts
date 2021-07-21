import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() name;
  @Input() email;
  @Input() photo;
  @Input() role;

  constructor() { }

  ngOnInit() {
  }

}
