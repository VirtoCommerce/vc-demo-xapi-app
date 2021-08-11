import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressesRoutingModule } from './addresses-routing.module';
import { AddressesComponent } from './addresses.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { AddressesEffects } from './store/addresses.effects';
import { StoreModule } from '@ngrx/store';
import * as fromAddresses from '../addresses/store/addresses.reducer';

@NgModule({
  declarations: [
    AddressesComponent,
  ],
  imports: [
    CommonModule,
    AddressesRoutingModule,
    NgbPaginationModule,
    StoreModule.forFeature(fromAddresses.addressesFeatureKey, fromAddresses.reducer),
    EffectsModule.forFeature([
      AddressesEffects,
    ]),
  ],
})
export class AddressesModule { }
