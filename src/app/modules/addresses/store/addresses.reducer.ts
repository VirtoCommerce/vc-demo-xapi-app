import { createReducer, on } from '@ngrx/store';
import { Address } from 'src/app/models/address.model';
import * as AddressesActions from './addresses.actions';

export const addressesFeatureKey = 'addresses';

export interface State {
  addresses: {
    items?: Address [] | null,
    totalCount?: number | null
  } | null,
  selectedAddress: Address | null,
  editAddress: Address | null,
}

export const initialState: State = {
  addresses: null,
  selectedAddress: null,
  editAddress: null,
};

export const reducer = createReducer(
  initialState,

  on(AddressesActions.setSelectedAddress, (state, action): State => {
    return {
      ...state,
      selectedAddress: action.address,
      editAddress: action.address,
    };
  }),
  on(AddressesActions.setAddress, (state, action): State => ({
    ...state,
    editAddress: {
      ...state.editAddress,
      ...action.data,
    },
  })),
  on(AddressesActions.updateAddress, (state) : State => state),
  on(AddressesActions.updateAddressSuccess, (state, action): State  => {
    const addresses = action.data?.updateMemberAddresses?.addresses?.map(address => ({
      ...address,
    }));
    const changedAddress = addresses?.find(address => address.id === state.selectedAddress?.id);
    delete changedAddress?.__typename;
    return {
      ...state,
      editAddress: { ...changedAddress },
      selectedAddress: { ...changedAddress },
    };
  }),
  on(AddressesActions.getAddressess, (state): State => state),
  on(AddressesActions.getAddressessSuccess, (state, action): State => {
    const addresses = action.data.organization?.addresses?.items?.map(item => ({
      ...item,
    }));
    addresses?.forEach(address => delete address.__typename);
    return {
      ...state,
      addresses: {
        items: addresses,
        totalCount: action.data.organization?.addresses?.totalCount,
      },
    };
  }),
  on(AddressesActions.getAddressessFailure, (state): State => ({
    ...state,
    addresses: null,
  })),
  on(AddressesActions.resetAddressForm, (state): State => ({
    ...state,
    editAddress: null,
    selectedAddress: null,
  }))

);
