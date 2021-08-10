import * as fromCompanies from './companies.actions';

describe('getCompaniess', () => {
  it('should return an action', () => {
    expect(fromCompanies.getCompany().type).toBe('[Companies] Get Companiess');
  });
});
