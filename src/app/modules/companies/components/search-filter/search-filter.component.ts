import { Component, EventEmitter, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'vc-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: [
    './search-filter.component.scss',
  ],
})
export class SearchFilterComponent {
  faSearch = faSearch;

  @Output() searchPhraseChange = new EventEmitter<string>();

  @Output() searchButtonClick = new EventEmitter();

  onSearchFilterUpdate(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchPhraseChange.emit(value);
  }

  onSearchButtonClick(): void {
    this.searchButtonClick.emit();
  }
}
