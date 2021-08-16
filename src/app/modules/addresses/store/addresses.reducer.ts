import { createReducer, on } from '@ngrx/store';
import { updateMemberAddresses, updateMemberAddresses_updateMemberAddresses, updateMemberAddresses_updateMemberAddresses_addresses } from 'src/app/graphql/types/updateMemberAddresses';
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

  on(AddressesActions.getAddressess, (state): State => state),
  on(AddressesActions.setSelectedAddress, (state, action): State => {
    return {
      ...state,
      selectedAddress: action.address,
    };
  }),
  on(AddressesActions.setEditAddress, (state, action): State => {
    return {
      ...state,
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
    return {
      ...state,
      selectedAddress: {
        id: addresses![0].key,
        ...addresses,
      },
    };
  }),
  on(AddressesActions.getAddressessSuccess, (state, action): State => {
    return {
      ...state,
      addresses: {
        items: action.data.organization?.addresses?.items?.map(address => ({
          ...address,
        })),
        totalCount: action.data.organization?.addresses?.totalCount,
      },
    };
  }),
  on(AddressesActions.getAddressessFailure, (state): State => ({
    ...state,
    addresses: null,
  }))

);
