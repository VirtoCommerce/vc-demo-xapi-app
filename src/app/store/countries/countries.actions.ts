import { ApolloError } from '@apollo/client/core';
import { createAction, props } from '@ngrx/store';
import { getCountries as getCountriesQuery } from 'src/app/graphql/types/getCountries';

export const getCountries = createAction(
  '[Countries] Get Countries'
);

export const getCountriesSuccess = createAction(
  '[Countries] Get Countries Success',
  props<{ data: getCountriesQuery }>()
);

export const getCountriesFailure = createAction(
  '[Countries] Get Countries Failure',
  props<{ error: ApolloError }>()
);
