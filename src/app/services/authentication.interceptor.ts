import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {finalize, tap} from 'rxjs/operators';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  count = 0;

  constructor(private router: Router, private spinner: NgxSpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinner.show();
    this.count++;
    const token = localStorage.getItem('token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token.split(' ')[1]}`
        }
      });
    }
    return next.handle(request).pipe ( tap (
      event => {},
      error => console.log( error )
      ), finalize(() => {
        this.count--;
        if ( this.count === 0 ) {
          this.spinner.hide ();
        }
      })
    );
  }
}
