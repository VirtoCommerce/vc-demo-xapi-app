import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThankYouComponent } from '../../components/thank-you/thank-you.component';
import { EmailRequestComponent } from './email-request/email-request.component';

const routes: Routes = [
  {
    path: '',
    component: EmailRequestComponent,
  },
  {
    path: 'thank-you',
    component: ThankYouComponent,
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
