import { getOrganization_organization } from './../../../graphql/types/getOrganization';
import { Company } from '../../../models/company.model';
import { PartialDeep } from 'type-fest';
import { createReducer, on } from '@ngrx/store';
import * as CompaniesActions from './companies.actions';
import { updateOrganization_updateOrganization } from '../../../graphql/types/updateOrganization';

export const companiesFeatureKey = 'companies';

export interface State {
  selectedCompany: PartialDeep<Company> | null,
  editCompany: PartialDeep<Company> | null,
}

export const initialState: State = {
  selectedCompany: null,
  editCompany: null,
};

export const reducer = createReducer(
  initialState,

  on(CompaniesActions.getCompany, (state) : State => state),
  on(CompaniesActions.getCompanySuccess, (state, action): State  =>  {
    const organization = action.data?.organization;
    return {
      ...state,
      selectedCompany: mapToCompany(organization),
      editCompany: mapToCompany(organization),
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
      selectedCompany: mapToCompany(organization),
    };
  }),
  on(CompaniesActions.getCompanyFailure, (state, _): State => state)

);

function mapToCompany(
  organizatin?: getOrganization_organization | updateOrganization_updateOrganization | null
) : Company | null {
  return !organizatin
    ? null
    : {
      id: organizatin.id,
      name: organizatin.name as string,
    };
}

