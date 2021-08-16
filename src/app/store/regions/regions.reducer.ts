import { createReducer, on } from '@ngrx/store';
import { getRegions_regions } from 'src/app/graphql/types/getRegions';
import { Region } from 'src/app/models/region.model';
import * as RegionsActions from './regions.actions';

export const regionsFeatureKey = 'regions';

/*
 * Export type State = { [id: string]: Region[]; } | null;
 * export const initialState: State = {};
 */

export interface State {
  regions: Map<string, Region[]>;
  // Regs: Region[];
}

export const initialState: State = {
  regions: new Map<string, Region[]>(),
  // Regs: []
};

export const reducer = createReducer<State>(
  initialState,

  on(RegionsActions.getRegions, (state): State => state),

  on(RegionsActions.getRegionsSuccess, (state, action): State => {
    const regions = action.data.regions
      ?.filter(region => region != null)
      .map(region => region as getRegions_regions)
      .map(region => ({
        id: region.id,
        name: region.name,
      })) ?? [];

    // State.regs = regions;

    if (state?.regions != null && !state.regions.has(action.countryId)) {
      state.regions.set(action.countryId, regions);
    }

    return {
      regions: state.regions,
    };
  }),

  on(RegionsActions.getRegionsFailure, (state): State => state)
);
