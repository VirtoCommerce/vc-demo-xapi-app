import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DynamicFormsNGBootstrapUIModule } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { OrderDetailsRoutingModule } from './order-details-routing.module';
import { OrderDetailsComponent } from './order-details.component';
import { OrderDetailsAddressComponent } from './components/order-details-address/order-details-address.component';
import { OrderGiftsComponent } from './components/order-gifts/order-gifts.component';
import { OrderPaymentMethodComponent } from './components/order-payment-method/order-payment-method.component';
import { OrderShippingMethodComponent } from './components/order-shipping-method/order-shipping-method.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { OrderLineItemsComponent } from './components/order-line-items/order-line-items.component';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    OrderDetailsComponent,
    OrderLineItemsComponent,
    OrderGiftsComponent,
    OrderSummaryComponent,
    OrderDetailsAddressComponent,
    OrderShippingMethodComponent,
    OrderPaymentMethodComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormsNGBootstrapUIModule,
    OrderDetailsRoutingModule,
    FontAwesomeModule,
    DirectivesModule,
  ],
})
export class OrderDetailsModule { }
