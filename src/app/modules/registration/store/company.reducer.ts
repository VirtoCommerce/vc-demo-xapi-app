import { createReducer, on } from '@ngrx/store';
import * as CompanyActions from './company.actions';
import { Company } from './company.payload';
import { PartialDeep } from 'type-fest';

export const companyFeatureKey = 'company';

export interface State {
  company: PartialDeep<Company> | null;
  succeeded: boolean | null;
}

export const initialState: State = {
  company: null,
  succeeded: null,
};

export const reducer = createReducer(
  initialState,

  on(CompanyActions.setCompany, (state, action): State => ({
    ...state,
    company: {
      ...state.company,
      ...action.data,
      owner: {
        ...state.company?.owner,
        ...action.data.owner,
      },
      address: {
        ...state.company?.address,
        ...action.data.address,
      },
    },
  })),
  on(CompanyActions.registerCompany, (state): State => state),
  on(CompanyActions.registerCompanySuccess, (state, action): State => ({
    ...state,
    succeeded: action.data,
  })),
  on(CompanyActions.registerCompanyFailure, (state): State => state)

);
