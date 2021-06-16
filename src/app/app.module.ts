import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './routes/app.routing';
import { ComponentsModule } from './components/components.module';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { FormsRegisterModule } from './pages/register/forms-register/forms-register.module';
import {CommonModule} from '@angular/common';
import {UtilitiesModule} from './utilities/utilities.module';
import {RoutesLayoutModule} from './layouts/routes-layout/routes-layout.module';
import {ServicesModule} from './services/services.module';

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
    ServicesModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
