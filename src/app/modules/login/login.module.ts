import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormsNGBootstrapUIModule } from '@ng-dynamic-forms/ui-ng-bootstrap';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormsNGBootstrapUIModule,
    LoginRoutingModule,
  ],
})
export class LoginModule { }
