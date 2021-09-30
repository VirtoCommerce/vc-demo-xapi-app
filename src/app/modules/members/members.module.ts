import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ErrorsModule } from '../errors/errors.module';
import { MembersRoutingModule } from './members-routing.module';
import * as fromMembers from './store/members.reducer';
import { MembersEffects } from './store/members.effects';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { InviteMembersComponent } from './components/invite-members/invite-members.component';
import { MembersListComponent } from './components/members-list/members-list.component';
import { MembersListFilterBarComponent }
  from './components/members-list/members-list-filter-bar/members-list-filter-bar.component';
import { MembersListTableComponent }
  from './components/members-list/members-list-table/members-list-table.component';
import { MembersListPaginationComponent }
  from './components//members-list/members-list-pagination/members-list-pagination.component';
import { SearchFilterComponent }
  from './components/members-list/members-list-filter-bar/search-filter/search-filter.component';
import { OptionFilterComponent }
  from './components/members-list/members-list-filter-bar/option-filter/option-filter.component';
import { ActionButtonsComponent }
  from './components/members-list/members-list-table/action-buttons/action-buttons.component';
import { MemberStateComponent }
  from './components/members-list/members-list-table/member-state/member-state.component';
import { MemberStatusComponent }
  from './components/members-list/members-list-table/member-status/member-status.component';

@NgModule({
  declarations: [
    AddMemberComponent,
    MembersListComponent,
    MembersListFilterBarComponent,
    MembersListTableComponent,
    MembersListPaginationComponent,
    SearchFilterComponent,
    OptionFilterComponent,
    ActionButtonsComponent,
    MemberStateComponent,
    MemberStatusComponent,
    InviteMembersComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorsModule,
    MembersRoutingModule,
    FontAwesomeModule,
    NgbPaginationModule,
    StoreModule.forFeature(fromMembers.membersFeatureKey, fromMembers.reducer),
    EffectsModule.forFeature([
      MembersEffects,
    ]),
  ],
})
export class MembersModule { }
