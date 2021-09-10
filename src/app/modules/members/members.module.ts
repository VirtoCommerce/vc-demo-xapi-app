import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromMembers from './store/members.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MembersEffects } from './store/members.effects';

@NgModule({
  declarations: [
    AddMemberComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MembersRoutingModule,
    StoreModule.forFeature(fromMembers.membersFeatureKey, fromMembers.reducer),
    EffectsModule.forFeature([
      MembersEffects,
    ]),
  ],
})
export class MembersModule { }
