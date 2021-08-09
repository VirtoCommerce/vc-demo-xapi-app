import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentCustomerOrganization } from 'src/app/store/current-customer/current-customer.selectors';

@Component({
  selector: 'vc-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: [
    './addresses.component.scss',
  ],
})
export class AddressesComponent {
  curentCustomerOrganization$ =  this.store.select(selectCurrentCustomerOrganization);

  constructor(private readonly store: Store) { }
}
