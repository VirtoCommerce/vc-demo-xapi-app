import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './order-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DynamicFormsNGBootstrapUIModule } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { OrderDetailsRoutingModule } from './order-details-routing.module';
import { OrderBillingAddressComponent } from './components/order-billing-address/order-billing-address.component';
import { OrderGiftsComponent } from './components/order-gifts/order-gifts.component';
import { OrderPaymentMethodComponent } from './components/order-payment-method/order-payment-method.component';
import { OrderShippingAddressComponent } from './components/order-shipping-address/order-shipping-address.component';
import { OrderShippingMethodComponent } from './components/order-shipping-method/order-shipping-method.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { OrderLineItemsComponent } from './components/order-line-items/order-line-items.component';

@NgModule({
  declarations: [
    OrderDetailsComponent,
    OrderLineItemsComponent,
    OrderGiftsComponent,
    OrderSummaryComponent,
    OrderBillingAddressComponent,
    OrderShippingAddressComponent,
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
  ],
})
export class OrderDetailsModule { }
