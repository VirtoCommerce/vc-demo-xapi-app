import { Member } from 'src/app/models/member.model';
import * as fromMembers from './members.actions';

describe('addMember', () => {
  it('should return an action', () => {
    expect(fromMembers.addMember({ member: {} as Member }).type).toBe('[Member] Add Member');
  });
});
