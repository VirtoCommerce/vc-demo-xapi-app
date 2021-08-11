import { EditCompany } from './../../../models/edit-company.model';
import { PartialDeep } from 'type-fest';
import { createReducer, on } from '@ngrx/store';
import * as CompaniesActions from './companies.actions';

export const companiesFeatureKey = 'companies';

export interface State {
  company: PartialDeep<EditCompany> | null,
}

export const initialState: State = {
  company: null,
};

export const reducer = createReducer(
  initialState,

  on(CompaniesActions.getCompany, (state) : State => state),
  on(CompaniesActions.getCompanySuccess, (_, action): State  =>  {
    const organization = action.data.organization;
    return { company: organization === null
      ? null
      : {
        id: organization.id,
        name: organization.name as string,
      } };
  }),
  on(CompaniesActions.getCompanyFailure, (state, _): State => state),
  on(CompaniesActions.setCompany, (state, action) : State => ({
    ...state,
    company: {
      ...state.company,
      ...action.data,
    },
  })),
  on(CompaniesActions.updateCompany, (state) : State => state),
  on(CompaniesActions.updateCompanySuccess, (_, action): State  =>  {
    const organization = action.data?.updateOrganization;
    return { company: !organization
      ? null
      : {
        id: organization.id,
        name: organization.name as string,
      } };
  }),
  on(CompaniesActions.getCompanyFailure, (state, _): State => state)

);

