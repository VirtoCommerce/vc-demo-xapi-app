import { Component, EventEmitter, Output } from '@angular/core';
import { FilterValues } from '../../members-list/models/filter-values.model';
import { InputValues } from '../../members-list/models/input-values.model';

@Component({
  selector: 'vc-members-list-filter-bar',
  templateUrl: './members-list-filter-bar.component.html',
  styleUrls: [
    './members-list-filter-bar.component.scss',
  ],
})

export class MembersListFilterBarComponent {
  searchInputValue = '';

  selectInputValue = 'all';

  @Output() filterChange = new EventEmitter<FilterValues>();

  onValueChanges({ value, emitterElement } : InputValues): void {
    switch (emitterElement) {
    case 'input':
      this.searchInputValue = value;
      break;
    case 'select':
      this.selectInputValue = value;
      break;
    default:
      break;
    }
    this.filterChange.emit({
      searchInputValue: this.searchInputValue,
      selectInputValue: this.selectInputValue,
    });
  }
}
