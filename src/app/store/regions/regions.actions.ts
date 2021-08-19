import { ApolloError } from '@apollo/client/core';
import { createAction, props } from '@ngrx/store';
import { getRegions as getRegionsQuery } from 'src/app/graphql/types/getRegions';

export const getRegions = createAction(
  '[Regions] Get Regions',
  props<{ countryId: string }>()
);

export const getRegionsSuccess = createAction(
  '[Regions] Get Regions Success',
  props<{ countryId: string, data: getRegionsQuery }>()
);

export const getRegionsFailure = createAction(
  '[Regions] Get Regions Failure',
  props<{ error: ApolloError }>()
);
