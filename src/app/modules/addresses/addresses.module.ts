import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressesRoutingModule } from './addresses-routing.module';
import { AddressesComponent } from './addresses.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { AddressesEffects } from './store/addresses.effects';
import { StoreModule } from '@ngrx/store';
import * as fromAddresses from '../addresses/store/addresses.reducer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddressEditComponent } from './components/address-edit/address-edit.component';

@NgModule({
  declarations: [
    AddressesComponent,
    AddressEditComponent,
  ],
  imports: [
    CommonModule,
    AddressesRoutingModule,
    NgbPaginationModule,
    StoreModule.forFeature(fromAddresses.addressesFeatureKey, fromAddresses.reducer),
    EffectsModule.forFeature([
      AddressesEffects,
    ]),
    FontAwesomeModule,
  ],
})
export class AddressesModule { }
