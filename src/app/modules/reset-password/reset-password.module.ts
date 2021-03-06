import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordRoutingModule } from './reset-password-routing.module';

import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import { EmailRequestComponent } from './email-request/email-request.component';
@NgModule({
  declarations: [
    ResetPasswordFormComponent,
    EmailRequestComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ResetPasswordRoutingModule,
  ],
})
export class ResetPasswordModule { }
