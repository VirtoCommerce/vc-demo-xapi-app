import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'vc-search',
  templateUrl: './search.component.html',
  styleUrls: [
    './search.component.scss',
  ],
})
export class SearchComponent {
  @Output() searchUpdateEvent = new EventEmitter<string>()

  submitSearch(keyword: string): void {
    this.searchUpdateEvent.emit(keyword);
  }
}
