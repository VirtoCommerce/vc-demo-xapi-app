import { selectMembersState } from './members.selectors';
import * as fromMembers from './members.reducer';

describe('Member Selectors', () => {
  it('should select the feature state', () => {
    const result = selectMembersState({
      [fromMembers.membersFeatureKey]: fromMembers.initialState,
    });

    expect(result).toEqual(fromMembers.initialState);
  });
});
