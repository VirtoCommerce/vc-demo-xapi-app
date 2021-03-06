import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormsNGBootstrapUIModule } from '@ng-dynamic-forms/ui-ng-bootstrap';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { ErrorsModule } from '../errors/errors.module';

@NgModule({
  declarations: [
    LoginComponent,
    LoggedInComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormsNGBootstrapUIModule,
    LoginRoutingModule,
    ErrorsModule,
  ],
})
export class LoginModule { }
