import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Member } from 'src/app/models/member.model';

@Component({
  selector: 'vc-members-list-table',
  templateUrl: './members-list-table.component.html',
  styleUrls: [
    './members-list-table.component.scss',
  ],
})

export class MembersListTableComponent {
  @Input() members: Partial<Member>[] | null = [];

  @Input() nameSortDirection = '';

  @Output() changeSortDirection = new EventEmitter();

  applySorting(): void {
    this.changeSortDirection.emit();
  }
}
