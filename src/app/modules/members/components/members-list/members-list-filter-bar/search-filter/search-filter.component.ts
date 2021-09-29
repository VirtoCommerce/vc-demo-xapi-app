import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'vc-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: [
    './search-filter.component.scss',
  ],
})
export class SearchFilterComponent implements OnInit, OnDestroy {
  @Output() searchPhraseChange = new EventEmitter<string>();

  @Output() searchButtonClick = new EventEmitter<void>();

  faSearch = faSearch;

  onSearchFilterUpdateSubscriber$ = new Subject<string>();

  unsibscriber = new Subject();

  onSearchFilterUpdate(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.onSearchFilterUpdateSubscriber$.next(value);
  }

  onSearchButtonClick(): void {
    this.searchButtonClick.emit();
  }

  ngOnInit(): void {
    const inputDelay = 600;
    this.onSearchFilterUpdateSubscriber$
      .pipe(
        takeUntil(this.unsibscriber),
        debounceTime(inputDelay)
      )
      .subscribe(value => this.searchPhraseChange.emit(value));
  }

  ngOnDestroy(): void {
    this.unsibscriber.next();
    this.unsibscriber.complete();
  }
}
