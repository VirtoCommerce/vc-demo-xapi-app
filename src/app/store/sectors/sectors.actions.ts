import { ApolloError } from '@apollo/client/core';
import { createAction, props } from '@ngrx/store';
import { getDictionaryDynamicPropery } from 'src/app/graphql/types/getDictionaryDynamicPropery';

export const getSectors = createAction(
  '[Sectors] Get Sectors'
);

export const getSectorsSuccess = createAction(
  '[Sectors] Get Sectors Success',
  props<{ data: getDictionaryDynamicPropery }>()
);

export const getSectorsFailure = createAction(
  '[Sectors] Get Sectors Failure',
  props<{ error: ApolloError }>()
);
