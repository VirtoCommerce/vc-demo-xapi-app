import { getOrganization_organization } from './../../../graphql/types/getOrganization';
import { EditCompany } from './../../../models/edit-company.model';
import { PartialDeep } from 'type-fest';
import { createReducer, on } from '@ngrx/store';
import * as CompaniesActions from './companies.actions';
import { updateOrganization_updateOrganization } from '../../../graphql/types/updateOrganization';

export const companiesFeatureKey = 'companies';

export interface State {
  company: PartialDeep<EditCompany> | null,
  editCompany: PartialDeep<EditCompany> | null,
}

export const initialState: State = {
  company: null,
  editCompany: null,
};

export const reducer = createReducer(
  initialState,

  on(CompaniesActions.getCompany, (state) : State => state),
  on(CompaniesActions.getCompanySuccess, (state, action): State  =>  {
    const organization = action.data.organization;
    return {
      ...state,
      company: mapToEditCompany(organization),
      editCompany: mapToEditCompany(organization),
    };
  }),
  on(CompaniesActions.getCompanyFailure, (state, _): State => state),
  on(CompaniesActions.setCompany, (state, action) : State => ({
    ...state,
    editCompany: {
      ...state.company,
      ...action.data,
    },
  })),
  on(CompaniesActions.updateCompany, (state) : State => state),
  on(CompaniesActions.updateCompanySuccess, (state, action): State  =>  {
    const organization = action.data?.updateOrganization;
    return {
      ...state,
      company: mapToEditCompany(organization),
    };
  }),
  on(CompaniesActions.getCompanyFailure, (state, _): State => state)

);

function mapToEditCompany(
  organizatin: getOrganization_organization | updateOrganization_updateOrganization): EditCompany {
  return organizatin === null
    ? null
    : {
      id: organizatin.id,
      name: organizatin.name as string,
    };
}

