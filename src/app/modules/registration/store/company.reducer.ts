import { createReducer, on } from '@ngrx/store';
import * as CompanyActions from './company.actions';
import { CompanyRegistration } from 'src/app/models/company-registration.model';
import { PartialDeep } from 'type-fest';

export const companyFeatureKey = 'company';

export interface State {
  companyRegistration: PartialDeep<CompanyRegistration> | null;
  succeeded: boolean | null;
}

export const initialState: State = {
  companyRegistration: null,
  succeeded: null,
};

export const reducer = createReducer(
  initialState,

  on(CompanyActions.setCompany, (state, action): State => ({
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
  on(CompanyActions.clearCompany, (): State => ({
    companyRegistration: null,
    succeeded: null,
  })),
  on(CompanyActions.registerCompany, (state): State => state),
  on(CompanyActions.registerCompanySuccess, (state, action): State => ({
    ...state,
    succeeded: action.data,
  })),
  on(CompanyActions.registerCompanyFailure, (state): State => state)

);
