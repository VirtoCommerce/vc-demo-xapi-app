import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsNGBootstrapUIModule } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CartCommentComponent } from './components/cart-comment/cart-comment.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartDynamicPropertyComponent } from './components/cart-dynamic-property/cart-dynamic-property.component';
import { CartCouponComponent } from './components/cart-coupon/cart-coupon.component';
import { LineItemsComponent } from './components/line-items/line-items.component';
import { CartGiftsComponent } from './components/cart-gifts/cart-gifts.component';
import { ShippingAddressComponent } from './components/shipping-address/shipping-address.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { BillingAddressComponent } from './components/billing-address/billing-address.component';
import { ShippingMethodComponent } from './components/shipping-method/shipping-method.component';
import { ShippingMethodSelectComponent } from './components/shipping-method-select/shipping-method-select.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { PaymentMethodSelectComponent } from './components/payment-method-select/payment-method-select.component';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    CheckoutComponent,
    CartCommentComponent,
    CartSummaryComponent,
    CartDynamicPropertyComponent,
    CartCouponComponent,
    LineItemsComponent,
    CartGiftsComponent,
    ShippingAddressComponent,
    BillingAddressComponent,
    AddressFormComponent,
    ShippingMethodComponent,
    ShippingMethodSelectComponent,
    PaymentMethodComponent,
    PaymentMethodSelectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormsNGBootstrapUIModule,
    CheckoutRoutingModule,
    FontAwesomeModule,
    DirectivesModule,
  ],
})
export class CheckoutModule { }
