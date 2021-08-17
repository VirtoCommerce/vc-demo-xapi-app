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
import { ShippingAddressComponent } from './components/shipping-address/shipping-address.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { BillingAddressComponent } from './components/billing-address/billing-address.component';

@NgModule({
  declarations: [
    CheckoutComponent,
    CartCommentComponent,
    CartSummaryComponent,
    CartDynamicPropertyComponent,
    CartCouponComponent,
    LineItemsComponent,
    ShippingAddressComponent,
    BillingAddressComponent,
    AddressFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormsNGBootstrapUIModule,
    CheckoutRoutingModule,
    FontAwesomeModule,
  ],
})
export class CheckoutModule { }
