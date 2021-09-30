import { Component, EventEmitter, Output } from '@angular/core';
import { FilterValues } from './filter-values.model';

@Component({
  selector: 'vc-companies-list-filter-bar',
  templateUrl: './companies-list-filter-bar.component.html',
  styleUrls: [
    './companies-list-filter-bar.component.scss',
  ],
})
export class CompaniesListFilterBarComponent {
  searchFilterValue = '';

  selectInputValue = '';

  @Output() filterChange = new EventEmitter<FilterValues>();

  onSearchPhraseChanges(value: string): void {
    this.selectInputValue = value;
    this.filterChange.emit({
      searchFilterValue: this.searchFilterValue,
      selectInputValue: this.selectInputValue,
    });
  }

  onOptionFilterChanges(value: string): void {
    this.searchFilterValue = value;
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
