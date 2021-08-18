import { ApolloError } from '@apollo/client/core';
import { createAction, props } from '@ngrx/store';
import { getDictionaryDynamicProperty } from 'src/app/graphql/types/getDictionaryDynamicProperty';

export const getSectors = createAction(
  '[Sectors] Get Sectors'
);

export const getSectorsSuccess = createAction(
  '[Sectors] Get Sectors Success',
  props<{ data: getDictionaryDynamicProperty }>()
);

export const getSectorsFailure = createAction(
  '[Sectors] Get Sectors Failure',
  props<{ error: ApolloError }>()
);
