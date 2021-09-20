import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromMembers from './store/members.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MembersEffects } from './store/members.effects';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MembersListComponent } from './components/members-list/members-list.component';
import { MembersListFilterBarComponent } from './components/members-list-components/members-list-filter-bar/members-list-filter-bar.component';
import { MembersListTableComponent } from './components/members-list-components/members-list-table/members-list-table.component';
import { MembersListPaginationComponent } from './components//members-list-components/members-list-pagination/members-list-pagination.component';
import { SearchInputComponent } from './components/members-list-components/members-list-filter-bar/members-list-filter-bar-components/search-input/search-input.component';
import { OptionFilterComponent } from './components/members-list-components/members-list-filter-bar/members-list-filter-bar-components/option-filter/option-filter.component';

@NgModule({
  declarations: [
    AddMemberComponent,
    MembersListComponent,
    MembersListFilterBarComponent,
    MembersListTableComponent,
    MembersListPaginationComponent,
    SearchInputComponent,
    OptionFilterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MembersRoutingModule,
    FontAwesomeModule,
    StoreModule.forFeature(fromMembers.membersFeatureKey, fromMembers.reducer),
    EffectsModule.forFeature([
      MembersEffects,
    ]),
  ],
})
export class MembersModule { }
