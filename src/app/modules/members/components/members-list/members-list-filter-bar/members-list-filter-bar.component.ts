import { Component, EventEmitter, Output } from '@angular/core';
import { FilterValues } from './filter-values.model';

@Component({
  selector: 'vc-members-list-filter-bar',
  templateUrl: './members-list-filter-bar.component.html',
  styleUrls: [
    './members-list-filter-bar.component.scss',
  ],
})

export class MembersListFilterBarComponent {
  searchFilterValue = '';

  selectInputValue = '';

  @Output() filterChange = new EventEmitter<FilterValues>();

  onSearchPhraseChanges(value: string): void {
    this.searchFilterValue = value;
    this.filterChange.emit({
      searchFilterValue: this.searchFilterValue,
      selectInputValue: this.selectInputValue,
    });
  }

  onOptionFilterChanges(value: string): void {
    this.selectInputValue = value;
    this.filterChange.emit({
      searchFilterValue: this.searchFilterValue,
      selectInputValue: this.selectInputValue,
    });
  }

  onSearchButtonClick(): void {
    this.filterChange.emit({
      searchFilterValue: this.searchFilterValue,
      selectInputValue: this.selectInputValue,
    });
  }
}
