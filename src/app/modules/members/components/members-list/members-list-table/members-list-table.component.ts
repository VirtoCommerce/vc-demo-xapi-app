import { Component, Input } from '@angular/core';
import { Member } from 'src/app/models/member.model';

@Component({
  selector: 'vc-members-list-table',
  templateUrl: './members-list-table.component.html',
  styleUrls: [
    './members-list-table.component.scss',
  ],
})

export class MembersListTableComponent {
  @Input() members: Member[] | null = [];

  sortDirection = 'asc';

  sortDescending = 'desc';

  sortAscending = 'asc';

  applySorting(): void {
    console.log('applySorting');
  }
}
