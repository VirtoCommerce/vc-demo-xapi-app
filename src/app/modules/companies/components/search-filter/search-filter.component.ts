import { Component, EventEmitter, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { InputValues } from '../companies-list-filter-bar/input-values.model';

@Component({
  selector: 'vc-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: [
    './search-filter.component.scss',
  ],
})
export class SearchFilterComponent {
  faSearch = faSearch;

  @Output() valueChange = new EventEmitter<InputValues>();

  onSearchFilterUpdate(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    const emitterElement =  'input';
    this.valueChange.emit({
      value,
      emitterElement,
    });
  }
}
