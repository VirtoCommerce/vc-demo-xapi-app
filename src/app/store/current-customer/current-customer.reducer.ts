import { createReducer, on } from '@ngrx/store';
import * as CurrentCustomerActions from './current-customer.actions';
import {
  getCurrentCustomer_me,
  getCurrentCustomer_me_contact,
  getCurrentCustomer_me_contact_organizations,
} from 'src/app/graphql/types/getCurrentCustomer';
import { CurrentUser } from 'src/app/models/current-customer';

export const currentCustomerFeatureKey = 'currentCustomer';

export interface State {
  user: CurrentUser | null
}

export const initialState: State = {
  user: null,
};

export const reducer = createReducer(
  initialState,

  on(CurrentCustomerActions.getCurrentCustomer, (state): State => state),
  on(CurrentCustomerActions.getCurrentCustomerSuccess, (_, action): State => {
    const user = action.data.me as getCurrentCustomer_me;
    const contact = user.contact as getCurrentCustomer_me_contact;
    const organizations = contact.organizations as getCurrentCustomer_me_contact_organizations[];
    const sortedOrganizations = [
      ...organizations,
    ].sort((a, b) => {
      return (a?.name ?? '').localeCompare(b?.name ?? '');
    });

    const organization = sortedOrganizations[0];

    return {
      user: {
        id: user.id,
        userName: user.userName,
        contact: {
          id: contact.id,
          firstName: contact.firstName,
          lastName: contact.lastName,
          fullName: contact.fullName,
        },
        organization: {
          id: organization.id,
          name: organization.name as string,
        },
      },
    };
  }),
  on(CurrentCustomerActions.getCurrentCustomerFailure, (_): State => ({ user: null }))
);

