import { createReducer, on } from '@ngrx/store';
import { getDictionaryDynamicProperty_dynamicProperty_dictionaryItems_items
as GetDictionaryItem } from 'src/app/graphql/types/getDictionaryDynamicProperty';
import { Sector } from 'src/app/models/sector.model';
import * as SectorActions from './sectors.actions';

export const sectorsFeatureKey = 'sectors';

export type State = Sector[] | null;

export const initialState: State = [];

export const reducer = createReducer<State>(
  initialState,

  on(SectorActions.getSectors, (state): State => state),
  on(SectorActions.getSectorsSuccess, (_, action): State => action.data.dynamicProperty?.dictionaryItems?.items
    ?.map(item => item as GetDictionaryItem).map(item => ({
      id: item.id,
      name: item.name,
    })) ?? null),
  on(SectorActions.getSectorsFailure, (state): State => state)

);

