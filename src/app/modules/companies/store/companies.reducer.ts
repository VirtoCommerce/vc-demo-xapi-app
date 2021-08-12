import { EditCompany } from './../../../models/edit-company.model';
import { PartialDeep } from 'type-fest';
import { createReducer, on } from '@ngrx/store';
import * as CompaniesActions from './companies.actions';

export const companiesFeatureKey = 'companies';

export interface State {
  selectedCompany: PartialDeep<EditCompany> | null,
  editCompany: PartialDeep<EditCompany> | null,
}

export const initialState: State = {
  selectedCompany: null,
  editCompany: null,
};

export const reducer = createReducer(
  initialState,

  on(CompaniesActions.getCompany, (state) : State => state),
  on(CompaniesActions.getCompanySuccess, (state, action): State  =>  {
    const organization = action.data.organization;
    return {
      ...state,
      selectedCompany: organization === null
        ? null
        : {
          id: organization.id,
          name: organization.name as string,
        },
      editCompany: organization === null
        ? null
        : {
          id: organization.id,
          name: organization.name as string,
        },
    };
  }),
  on(CompaniesActions.getCompanyFailure, (state, _): State => state),
  on(CompaniesActions.setCompany, (state, action) : State => ({
    ...state,
    editCompany: {
      ...state.selectedCompany,
      ...action.data,
    },
  })),
  on(CompaniesActions.updateCompany, (state) : State => state),
  on(CompaniesActions.updateCompanySuccess, (state, action): State  =>  {
    const organization = action.data?.updateOrganization;
    return {
      ...state,
      selectedCompany: !organization
        ? null
        : {
          id: organization.id,
          name: organization.name as string,
        },
    };
  }),
  on(CompaniesActions.getCompanyFailure, (state, _): State => state)

);

