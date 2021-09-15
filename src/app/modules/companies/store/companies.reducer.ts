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
import { nonNull } from 'src/app/helpers/nonNull';

export const companiesFeatureKey = 'companies';

export interface DictionaryItem {
  value: string,
  valueId: string
}
export interface State {
  selectedCompany: Company | null,
  editCompany: PartialDeep<Company> | null,
  dictionaryItems: Record<string, DictionaryItem[]> | null,
  availableCultures: string[],
  activeCulture: string,
}

export const initialState: State = {
  selectedCompany: null,
  editCompany: null,
  dictionaryItems: null,
  availableCultures: [
    'en-US',
    'de-DE',
  ],
  activeCulture: 'de-DE',
};

export const reducer = createReducer(
  initialState,

  on(CompaniesActions.getCompany, (state) : State => state),
  on(CompaniesActions.getCompanySuccess, (state, action): State  =>  {
    const organization = action.data.organization;
    const company = mapToCompany(organization);
    const items = takeDictionaryItems(organization);
    return {
      ...state,
      selectedCompany: company,
      editCompany: { ...company },
      dictionaryItems: items,
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
  // on(CompaniesActions.updateCompanySuccess, (state, action): State  =>  {
  //   const organization = {
  //     ...action.data?.updateOrganization,
  //     ...action.data?.updateMemberDynamicProperties,
  //   };
  //   delete organization.__typename;
  //   const company = mapToCompany(organization as Omit<(
  //     updateOrganization_updateOrganization &
  //     updateMemberDynamicProperties_updateMemberDynamicProperties
  //   ), '__typename'>);
  //   return {
  //     ...state,
  //     selectedCompany: company,
  //     editCompany: company,
  //   };
  // }),
  on(CompaniesActions.getCompanyFailure, (state, _): State => state),
  on(CompaniesActions.setActiveCulture, (state, action): State => ({
    ...state,
    activeCulture: action.culture,
  }))

);

function mapToCompany(
  organization?: getOrganization_organization |
  Omit<(
    updateOrganization_updateOrganization &
    updateMemberDynamicProperties_updateMemberDynamicProperties
  ), '__typename'> | null
) : Company | null {
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
        value => /^true$/i.test(value)
      ),
      shortTextDictionary: getIdByValue(organization, COMPANY_DYNAMIC_PROPERTIES.shortTextDictionary) as string | null,
      image: organization.dynamicProperties
        .find(x => x?.name === COMPANY_DYNAMIC_PROPERTIES.image)?.value as string | null,
      htmlUsual: organization.dynamicProperties
        .find(x => x?.name === COMPANY_DYNAMIC_PROPERTIES.htmlUsual)?.value as string | null,
      shortTextMultilingual: organization.dynamicProperties
        .find(x => x?.name === COMPANY_DYNAMIC_PROPERTIES.shortTextMultilingual)?.value as string | null,
      longTextMultilingual: organization.dynamicProperties
        .find(x => x?.name === COMPANY_DYNAMIC_PROPERTIES.longTextMultilingual)?.value as string | null,
      htmlMultilingual: organization.dynamicProperties
        .find(x => x?.name === COMPANY_DYNAMIC_PROPERTIES.htmlMultilingual)?.value as string ?? '',
    };
}

/*
 * Use this workaround because platform uses the one incoming value
 * for patch value and value id properties of dictionary item
 */
function getIdByValue(company: getOrganization_organization | Omit<never, '__typename'>, property: string) {
  const dictProperty = company.dynamicProperties?.find(x => x?.name === property);
  const dictValue = dictProperty?.value;
  const dictItems = dictProperty?.dynamicProperty?.dictionaryItems?.items;
  return dictItems?.find(item => item?.name === dictValue)?.id || dictValue;
}

function takeDictionaryItems(organization: getOrganization_organization | null)
  : Record<string, DictionaryItem[]> | null {
  return !organization
    ? null
    : organization?.dynamicProperties
      ?.filter(nonNull)
      .map(dynamicPropertyValue => ({
        [dynamicPropertyValue.name as string]:
        dynamicPropertyValue.dynamicProperty?.dictionaryItems?.items?.map(item => ({
          value: item?.name as string,
          valueId: item?.id as string,
        })) as DictionaryItem[],
      }))
      .reduce((acc, item) => ({
        ...acc,
        ...item,
      }), {});
}

