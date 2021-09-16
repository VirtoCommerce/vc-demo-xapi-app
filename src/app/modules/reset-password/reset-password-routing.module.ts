import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmailRequestComponent } from './email-request/email-request.component';
import { ThankYouComponent } from '../../components/thank-you/thank-you.component';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: EmailRequestComponent,
  },
  {
    path: 'thank-you',
    component: ThankYouComponent,
  },
  {
    path: 'reset',
    component: ResetPasswordFormComponent,
  },
  {
    path: '**',
    component: DashboardComponent,
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
