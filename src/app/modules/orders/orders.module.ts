import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersEffects } from '../../store/order/orders.effects';
import * as fromOrders from '../../store/order/orders.reducer';
import { PropertyValuePipe } from './pipes/property-value.pipe';
import { VcCommonModule } from '../vc-common/vc-common.module';

@NgModule({
  declarations: [
    OrdersComponent,
    PropertyValuePipe,
  ],
  imports: [
    CommonModule,
    VcCommonModule,
    OrdersRoutingModule,
    NgbPaginationModule,
    FormsModule,
    FontAwesomeModule,
    StoreModule.forFeature(fromOrders.ordersFeatureKey, fromOrders.reducer),
    EffectsModule.forFeature([
      OrdersEffects,
    ]),
  ],
})
export class OrdersModule { }
