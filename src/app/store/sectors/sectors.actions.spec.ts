import * as fromSectors from './sectors.actions';

describe('getSectors', () => {
  it('should return an action', () => {
    expect(fromSectors.getSectors().type).toBe('[Sector] Get Sectors');
  });
});
