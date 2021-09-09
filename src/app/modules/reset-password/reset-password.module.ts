import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { ResetPasswordComponent } from './reset-password.component';
import { EmailRequestComponent } from './email-request/email-request.component';
import { DispatchConfirmationComponent } from './dispatch-confirmation/dispatch-confirmation.component';

@NgModule({
  declarations: [
    ResetPasswordComponent,
    EmailRequestComponent,
    DispatchConfirmationComponent,
  ],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
  ],
})
export class ResetPasswordModule { }
