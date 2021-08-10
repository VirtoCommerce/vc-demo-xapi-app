import { createReducer, on } from '@ngrx/store';
import * as CurrentCustomerActions from './current-customer.actions';
import { getCurrentCustomer_me } from 'src/app/graphql/types/getCurrentCustomer';

export const currentCustomerFeatureKey = 'currentCustomer';

export interface State {
  user: {
    id: string,
    userName: string,
    contact: {
      id: string,
      firstName: string,
      lastName: string,
      fullName: string
    } | null,
    organization: {
      id: string,
      name: string,
      addresses: {
        firstName?: string | null,
        lastName?: string | null,
        line1?: string | null,
        phone?: string | null,
        email?: string | null,
        regionName?: string | null,
        countryCode?: string | null,
        postalCode?: string | null,
        city?: string | null,
      } [] | null
    } | null
  }  | null
}

export const initialState: State = {
  user: null,
};

export const reducer = createReducer(
  initialState,

  on(CurrentCustomerActions.getCurrentCustomer, (state): State => state),
  on(CurrentCustomerActions.getCurrentCustomerSuccess, (_, action): State => {
    const user = action.data.me as getCurrentCustomer_me;
    let userOrganization = null;

    if (user.contact?.organizations != null && user.contact.organizations.length > 0) {
      const sortedOrganizationos = [
        ...user.contact.organizations,
      ].sort((a, b) => {
        return (a?.name ?? '').localeCompare(b?.name ?? '');
      });

      userOrganization = sortedOrganizationos[0];
    }

    return {
      user: {
        id: user.id,
        userName: user.userName,
        contact: user.contact === null
          ? null
          : {
            id: user.contact.id,
            firstName: user.contact.firstName,
            lastName: user.contact.lastName,
            fullName: user.contact.fullName,
          },
        organization: userOrganization === null
          ? null
          : {
            id: userOrganization.id,
            name: userOrganization.name as string,
            addresses: userOrganization.addresses.map(address => ({
              ...address,
            })),
          },
      },
    };
  }),
  on(CurrentCustomerActions.getCurrentCustomerFailure, (_): State => ({ user: null }))
);

