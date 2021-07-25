import { Component } from '@angular/core';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'argon-dashboard-angular';

  constructor(private spinner: NgxSpinnerService) {
    NgbModalRef.prototype['c'] = NgbModalRef.prototype.close;
    NgbModalRef.prototype.close = function (reason: string) {
      document.querySelector('.modal-backdrop').classList.remove('show');
      document.querySelector('.modal').classList.remove('show');
      setTimeout(() => {
        this['c'](reason);
      }, 500);
    };
    NgbModalRef.prototype['d'] = NgbModalRef.prototype.dismiss;
    NgbModalRef.prototype.dismiss = function (reason: string) {
      document.querySelector('.modal-backdrop').classList.remove('show');
      document.querySelector('.modal').classList.remove('show');
      setTimeout(() => {
        this['d'](reason);
      }, 500);
    };
  }
}
