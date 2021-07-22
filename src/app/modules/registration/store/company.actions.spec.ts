import * as fromCompany from './company.actions';

describe('registerCompany', () => {
  it('should return an action', () => {
    expect(fromCompany.registerCompany().type).toBe('[Company] Register Company');
  });
});
