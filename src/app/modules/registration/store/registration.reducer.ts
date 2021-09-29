import { createReducer, on } from '@ngrx/store';
import * as CompanyActions from './registration.actions';
import { CompanyMember, CompanyRegistration } from 'src/app/models/registration.model';
import { PartialDeep } from 'type-fest';
import { ApolloError } from '@apollo/client/core';

export const registrationFeatureKey = 'registration';

export interface State {
  companyRegistration: PartialDeep<CompanyRegistration> | null;
  companyRegistrationSucceeded: boolean | null;
  registrationByInvitation: PartialDeep<CompanyMember> | null;
  registrationByInvitationSucceeded: boolean | null;
  registrationByInvitationError: string | null;
}

export const initialState: State = {
  companyRegistration: null,
  companyRegistrationSucceeded: null,
  registrationByInvitation: null,
  registrationByInvitationSucceeded: null,
  registrationByInvitationError: null,
};

export const reducer = createReducer(
  initialState,

  on(CompanyActions.setCompanyRegistration, (state, action): State => ({
    ...state,
    companyRegistration: {
      ...state.companyRegistration,
      ...action.data,
      owner: {
        ...state.companyRegistration?.owner,
        ...action.data.owner,
      },
      address: {
        ...state.companyRegistration?.address,
        ...action.data.address,
      },
    },
  })),
  on(CompanyActions.clearCompanyRegistration, (state): State => ({
    ...state,
    companyRegistration: null,
    companyRegistrationSucceeded: null,
  })),
  on(CompanyActions.registerCompany, (state): State => state),
  on(CompanyActions.registerCompanySuccess, (state, action): State => ({
    ...state,
    companyRegistrationSucceeded: action.data,
  })),
  on(CompanyActions.registerCompanyFailure, (state): State => state),
  on(CompanyActions.setRegistrationByInvitation, (state, action): State => ({
    ...state,
    registrationByInvitation: {
      ...state.registrationByInvitation,
      ...action.data,
    },
  })),
  on(CompanyActions.clearRegistrationByInvitation, (state): State => ({
    ...state,
    registrationByInvitation: null,
    registrationByInvitationSucceeded: null,
  })),
  on(CompanyActions.registerByInvitation, (state): State => state),
  on(CompanyActions.registerByInvitationSuccess, (state): State => ({
    ...state,
    registrationByInvitationSucceeded: true,
  })),
  on(CompanyActions.registerByInvitationFailure, (state, action): State => ({
    ...state,
    registrationByInvitationSucceeded: false,
    registrationByInvitationError:
      action.error instanceof ApolloError
        ? action.error.message
        : action.error?.map(error => error?.description).join('\r\n') ?? '',
  }))

);
