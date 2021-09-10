import * as fromMembers from './members.actions';

describe('addMember', () => {
  it('should return an action', () => {
    expect(fromMembers.addMember().type).toBe('[Member] Add Member');
  });
});
