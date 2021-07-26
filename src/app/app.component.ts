import { Component } from '@angular/core';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerService} from 'ngx-spinner';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'argon-dashboard-angular';

  constructor(
    private spinner: NgxSpinnerService,
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) {
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

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    )
      .subscribe(() => {

        const rt = this.getChild(this.activatedRoute);

        rt.data.subscribe(data => {
          console.log(data);
          this.titleService.setTitle(data.title); });
      });
  }

  getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }

  }
}
