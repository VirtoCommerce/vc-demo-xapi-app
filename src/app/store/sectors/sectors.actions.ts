import { ApolloError } from '@apollo/client/core';
import { createAction, props } from '@ngrx/store';
import { getDictionaryDynamicPropery_dynamicProperty_dictionaryItems
as getDictionaryDynamicProperyQuery } from 'src/app/graphql/types/getDictionaryDynamicPropery';

export const getSectors = createAction(
  '[Sectors] Get Sectors'
);

export const getSectorsSuccess = createAction(
  '[Sectors] Get Sectors Success',
  props<{ data: getDictionaryDynamicProperyQuery }>()
);

export const getSectorsFailure = createAction(
  '[Sectors] Get Sectors Failure',
  props<{ error: ApolloError }>()
);
