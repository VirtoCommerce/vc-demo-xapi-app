import { DynamicFormOption } from '@ng-dynamic-forms/core';
import { createSelector } from '@ngrx/store';
import { selectSectorsState } from 'src/app/store/sectors/sectors.selectors';
import * as fromSectors from '../../../../store/sectors/sectors.reducer';

export const selectSectorOptions = createSelector(
  selectSectorsState,
  (state: fromSectors.State): DynamicFormOption<string>[] | null => state?.map(sector => new DynamicFormOption({
    label: sector.name,
    value: sector.id,
  })) ?? null
);
