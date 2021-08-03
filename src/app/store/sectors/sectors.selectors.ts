import { createFeatureSelector } from '@ngrx/store';
import * as fromSectors from './sectors.reducer';

export const selectSectorsState = createFeatureSelector<fromSectors.State>(
  fromSectors.sectorsFeatureKey
);
