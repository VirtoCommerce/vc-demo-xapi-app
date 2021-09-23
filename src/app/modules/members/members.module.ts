import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { MembersRoutingModule } from './members-routing.module';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromMembers from './store/members.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MembersEffects } from './store/members.effects';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
import { MemberStateComponent } from './components/members-list/members-list-table/member-state/member-state.component';

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
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
