import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './routes/app.routing';
import { ComponentsModule } from './components/components.module';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import {CommonModule, DatePipe, DecimalPipe} from '@angular/common';
import {UtilitiesModule} from './utilities/utilities.module';
import {RoutesLayoutModule} from './layouts/routes-layout/routes-layout.module';
import {AuthenticationInterceptor} from './services/authentication.interceptor';
import {NgxSpinnerModule} from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    AuthLayoutModule,
    AdminLayoutModule,
    UtilitiesModule,
    RoutesLayoutModule,
    NgxSpinnerModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    DecimalPipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
