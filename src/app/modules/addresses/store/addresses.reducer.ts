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

  on(AddressesActions.getAddressess, (state): State => state),
  on(AddressesActions.setSelectedAddress, (state, action): State => {
    const { __typename, ...selectedAddress } = action.address;
    return {
      ...state,
      selectedAddress: selectedAddress,
    };
  }),
  on(AddressesActions.setEditAddress, (state, action): State => {
    const { __typename, ...editAddress } = action.address;
    return {
      ...state,
      editAddress: editAddress,
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
    const changedAddress = addresses?.find(address => address.key === state.selectedAddress?.id);
    const changedAddressKey = changedAddress?.key;
    delete changedAddress?.key;
    const newAddress = {
      ...changedAddress,
      id: changedAddressKey,
    };
    return {
      ...state,
      editAddress: { ...newAddress },
      selectedAddress: { ...newAddress },
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
