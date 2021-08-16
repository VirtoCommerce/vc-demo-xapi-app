import { createReducer, on } from '@ngrx/store';
import * as AddressesActions from './addresses.actions';

export const addressesFeatureKey = 'addresses';

export interface State {
  addresses: {
    items?: {
      id?: string,
      firstName?: string | null,
      lastName?: string | null,
      line1?: string | null,
      phone?: string | null,
      email?: string | null,
      regionName?: string | null,
      countryCode?: string | null,
      postalCode?: string | null,
      city?: string | null,
    } [] | null,
    totalCount?: number | null
  } | null
}

export const initialState: State = {
  addresses: null,
};

export const reducer = createReducer(
  initialState,

  on(AddressesActions.getAddressess, (state): State => state),
  on(AddressesActions.getAddressessSuccess, (_, action): State => {
    return {
      addresses: {
        items: action.data.organization?.addresses?.items?.map(address => ({
          ...address,
        })),
        totalCount: action.data.organization?.addresses?.totalCount,
      },
    };
  }),
  on(AddressesActions.getAddressessFailure, (_): State => ({ addresses: null }))

);

