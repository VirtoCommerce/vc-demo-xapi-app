import { createReducer, on } from '@ngrx/store';
import * as CompanyActions from './registration.actions';
import { CompanyMember, CompanyRegistration } from 'src/app/models/registration.model';
import { PartialDeep } from 'type-fest';

export const registrationFeatureKey = 'registration';

export interface State {
  companyRegistration: PartialDeep<CompanyRegistration> | null;
  companyRegistrationSucceeded: boolean | null;
  registrationByInvitation: PartialDeep<CompanyMember> | null;
  registrationByInvitationSucceeded: boolean | null;
}

export const initialState: State = {
  companyRegistration: null,
  companyRegistrationSucceeded: null,
  registrationByInvitation: null,
  registrationByInvitationSucceeded: null,
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
  on(CompanyActions.getInvitedUser, (state): State => state),
  on(CompanyActions.getInvitedUserSuccess, (state, action): State => ({
    ...state,
    registrationByInvitation: {
      ...state.registrationByInvitation,
      email: action.email,
    },
  })),
  on(CompanyActions.getInvitedUserFailed, (state): State => state),
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
  on(CompanyActions.registerByInvitationSuccess, (state, action): State => ({
    ...state,
    registrationByInvitationSucceeded: action.data,
  })),
  on(CompanyActions.registerByInvitationFailure, (state): State => state)

);
