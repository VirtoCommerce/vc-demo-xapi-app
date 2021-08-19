import { createFeatureSelector } from '@ngrx/store';
import * as fromRegions from './regions.reducer';

export const selectRegionsState = createFeatureSelector<fromRegions.State>(
  fromRegions.regionsFeatureKey
);
