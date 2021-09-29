import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThankYouComponent } from '../../components/thank-you/thank-you.component';
import {
  RegistrationByInvitationComponent,
} from './components/registration-by-invitation/registration-by-invitation.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
  },
  {
    path: 'by-invitation',
    component: RegistrationByInvitationComponent,
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
export class RegistrationRoutingModule { }
