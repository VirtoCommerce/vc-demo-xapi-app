import * as fromSector from './sectors.reducer';
import { selectSectorsState } from './sectors.selectors';

describe('Sector Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSectorsState({
      [fromSector.sectorsFeatureKey]: {},
    });

    expect(result).toEqual([]);
  });
});
