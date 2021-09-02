import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentDetailsComponent } from './payment-details.component';
import { PaymentsComponent } from './payments.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentsComponent,
  },
  {
    path: ':number',
    component: PaymentDetailsComponent,
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
export class PaymentsRoutingModule { }
