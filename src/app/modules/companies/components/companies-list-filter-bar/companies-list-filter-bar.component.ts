import { Component, EventEmitter, Output } from '@angular/core';
import { FilterValues } from './filter-values.model';
import { InputValues } from './input-values.model';

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

  onValueChanges({ value, emitterElement } : InputValues): void {
    switch (emitterElement) {
    case 'select':
      this.searchFilterValue = value;
      break;
    case 'input':
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
}
