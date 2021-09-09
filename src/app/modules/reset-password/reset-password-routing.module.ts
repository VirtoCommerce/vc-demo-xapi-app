import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailRequestComponent } from './email-request/email-request.component';

const routes: Routes = [
  {
    path: '',
    component: EmailRequestComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ResetPasswordRoutingModule { }
