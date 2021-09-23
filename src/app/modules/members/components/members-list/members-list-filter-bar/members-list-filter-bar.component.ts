import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FilterValues } from './filter-values.model';
import { InputValues } from './input-values.model';

@Component({
  selector: 'vc-members-list-filter-bar',
  templateUrl: './members-list-filter-bar.component.html',
  styleUrls: [
    './members-list-filter-bar.component.scss',
  ],
})

export class MembersListFilterBarComponent {
  searchFilterValue = '';

  selectInputValue = 'all';

  @Output() filterChange = new EventEmitter<FilterValues>();

  constructor(private readonly router: Router) {}

  onValueChanges({ value, emitterElement } : InputValues): void {
    switch (emitterElement) {
    case 'input':
      this.searchFilterValue = value;
      break;
    case 'select':
      this.selectInputValue = value;
      break;
    default:
      break;
    }
    this.filterChange.emit({
      searchFilterValue: this.searchFilterValue,
      selectInputValue: this.selectInputValue,
    });
  }

  async onAddNewMember(): Promise<void> {
    await this.router.navigate([
      'members',
      'add-member',
    ]);
  }
}
