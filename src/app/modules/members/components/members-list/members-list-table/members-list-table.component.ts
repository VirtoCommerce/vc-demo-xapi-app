import { CurrentCustomer } from './../../../../../store/current-customer/current-customer.reducer';
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
  @Input() currentCustomer?: CurrentCustomer;

  @Input() members: Partial<Member>[] | null = [];

  @Input() nameSortDirection = '';

  @Output() changeSortDirection = new EventEmitter();

  @Output() deleteMember = new EventEmitter<Member>()

  applySorting(): void {
    this.changeSortDirection.emit();
  }

  onDeleteClicked(member: Partial<Member>): void {
    this.deleteMember.emit(member as Member);
  }

  isCurrentCustomer(memberId?: string): boolean {
    return this.currentCustomer?.contact.id === memberId;
  }
}
