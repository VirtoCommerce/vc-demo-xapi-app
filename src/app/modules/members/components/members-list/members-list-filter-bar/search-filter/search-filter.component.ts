import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'vc-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: [
    './search-filter.component.scss',
  ],
})
export class SearchFilterComponent implements OnInit {
  faSearch = faSearch;

  @Output() searchPhraseChange = new EventEmitter<string>();

  @Output() searchButtonClick = new EventEmitter();

  onSearchFilterUpdateSubscriber$ = new Subject();

  onSearchFilterUpdate(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.onSearchFilterUpdateSubscriber$.next(value);
  }

  onSearchButtonClick(): void {
    this.searchButtonClick.emit();
  }

  ngOnInit(): void {
    this.onSearchFilterUpdateSubscriber$
      .pipe(debounceTime(600))
      .subscribe(value => this.searchPhraseChange.emit(value as string));
  }

  ngOnDestroy(): void {
    this.onSearchFilterUpdateSubscriber$.unsubscribe();
  }
}
