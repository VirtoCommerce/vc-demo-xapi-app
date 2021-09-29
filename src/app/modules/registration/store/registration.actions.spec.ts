import * as fromCompany from './registration.actions';

describe('registerCompany', () => {
  it('should return an action', () => {
    expect(fromCompany.registerCompany().type).toBe('[Registration] Register Company');
  });
});
