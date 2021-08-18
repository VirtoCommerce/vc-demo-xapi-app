import { PartialDeep } from 'type-fest';
import { updateOrganization } from './../../../graphql/types/updateOrganization';
import { Company } from '../../../models/company.model';
import { ApolloError } from '@apollo/client/core';
import { createAction, props } from '@ngrx/store';
import { getOrganization } from 'src/app/graphql/types/getOrganization';
import { updateMemberDynamicProperties } from 'src/app/graphql/types/updateMemberDynamicProperties';
import { getDictionaryDynamicProperty } from 'src/app/graphql/types/getDictionaryDynamicProperty';

export const getCompany = createAction(
  '[Companies] Get Company',
  props<{id: string}>()
);

export const getCompanySuccess = createAction(
  '[Companies] Get Company Success',
  props<{ data: getOrganization }>()
);

export const getCompanyFailure = createAction(
  '[Companies] Get Company Failure',
  props<{ error: ApolloError }>()
);

export const getDictionaryProperty = createAction(
  '[Companies] Get Dictionary Property',
  props<{idOrName: string}>()
);

export const getDictionaryPropertySuccess = createAction(
  '[Companies] Get Dictionary Property Success',
  props<{ data: getDictionaryDynamicProperty }>()
);

export const getDictionaryPropertyFailure = createAction(
  '[Companies] Get Dictionary Property Failure',
  props<{ error: ApolloError }>()
);

export const setCompany = createAction(
  '[Companies] Set Company',
  props<{ data: PartialDeep<Company> }>()
);

export const updateCompany = createAction(
  '[Companies] Update Company'
);

export const updateCompanySuccess = createAction(
  '[Companies] Update Company Success',
  props<{ data: updateOrganization & updateMemberDynamicProperties }>()
);

export const updateCompanyFailure = createAction(
  '[Companies] Update Company Failure',
  props<{ error: ApolloError }>()
);
