import { getOrganization_organization } from './../../../graphql/types/getOrganization';
import { Company } from '../../../models/company.model';
import { PartialDeep } from 'type-fest';
import { createReducer, on } from '@ngrx/store';
import * as CompaniesActions from './companies.actions';
import { updateOrganization_updateOrganization } from '../../../graphql/types/updateOrganization';
import {
  updateMemberDynamicProperties_updateMemberDynamicProperties,
} from 'src/app/graphql/types/updateMemberDynamicProperties';
import { nullable } from 'src/app/helpers/nullable';
import { COMPANY_DYNAMIC_PROPERTIES } from '../constants/dynamic-properties';
import { formatDate } from '@angular/common';

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
      ...state.editCompany,
      ...action.data,
    },
  })),
  on(CompaniesActions.updateCompany, (state) : State => state),
  on(CompaniesActions.updateCompanySuccess, (state, action): State  =>  {
    const organization = {
      ...action.data?.updateOrganization,
      ...action.data?.updateMemberDynamicProperties,
    };
    delete organization.__typename;
    const company = mapToCompany(organization as Omit<(
      updateOrganization_updateOrganization &
      updateMemberDynamicProperties_updateMemberDynamicProperties
    ), '__typename'>);
    return {
      ...state,
      selectedCompany: company,
      editCompany: company,
    };
  }),
  on(CompaniesActions.getCompanyFailure, (state, _): State => state)

);

function mapToCompany(
  organization?: getOrganization_organization |
  Omit<(
    updateOrganization_updateOrganization &
    updateMemberDynamicProperties_updateMemberDynamicProperties
  ), '__typename'> | null
) : Company | null {
  console.log(organization);
  return !organization
    ? null
    : {
      id: organization.id,
      name: organization.name,
      shortTextUsual: organization.dynamicProperties
        .find(x => x?.name === COMPANY_DYNAMIC_PROPERTIES.shortTextUsual)?.value as string | null,
      longTextUsual: organization.dynamicProperties
        .find(x => x?.name === COMPANY_DYNAMIC_PROPERTIES.longTextUsual)?.value as string | null,
      integerUsual: organization.dynamicProperties
        .find(x => x?.name === COMPANY_DYNAMIC_PROPERTIES.integerUsual)?.value as string | null,
      decimalNumberUsual: nullable(
        organization.dynamicProperties
          .find(x => x?.name === COMPANY_DYNAMIC_PROPERTIES.decimalNumberUsual)?.value as string | null,
        value => Number.parseFloat(value)
      ),
      date: nullable(
        organization.dynamicProperties
          .find(x => x?.name === COMPANY_DYNAMIC_PROPERTIES.date)?.value as string | null,
        value => formatDate(value, 'medium', 'en-US')
      ),
      boolean: nullable(
        organization.dynamicProperties
          .find(x => x?.name === COMPANY_DYNAMIC_PROPERTIES.boolean)?.value as string | null,
        value => /$true^/i.test(value)
      ),
    };
}
