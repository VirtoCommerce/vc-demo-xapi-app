import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from '../order/order.component';

const routes: Routes = [
  {
    path: ':number',
    data: { isDetailsMode: false },
    component: OrderComponent,
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
export class OrderSubmittedRoutingModule { }
