import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { ResetPasswordComponent } from './reset-password.component';
import { EmailRequestComponent } from './email-request/email-request.component';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
@NgModule({
  declarations: [
    ResetPasswordComponent,
    ResetPasswordFormComponent,
    EmailRequestComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ResetPasswordRoutingModule,
  ],
})
export class ResetPasswordModule { }
