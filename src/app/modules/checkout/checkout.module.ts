import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from './store/cart.effects';
import { StoreModule } from '@ngrx/store';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CartCommentComponent } from './components/cart-comment/cart-comment.component';
import * as fromCart from './store/cart.reducer';

@NgModule({
  declarations: [
    CheckoutComponent,
    CartCommentComponent,
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    StoreModule.forFeature(fromCart.cartFeatureKey, fromCart.reducer),
    EffectsModule.forFeature([
      CartEffects,
    ]),
  ],
})
export class CheckoutModule {
}
