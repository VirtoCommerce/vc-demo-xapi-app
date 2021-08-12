import * as fromCompanies from './companies.actions';

describe('getCompany', () => {
  it('should return an action', () => {
    expect(fromCompanies.getCompany({ id: 'id' }).type).toBe('[Companies] Get Company');
  });
});
