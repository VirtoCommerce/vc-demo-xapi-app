import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'vc-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: [
    './search-input.component.scss',
  ],
})
export class SearchInputComponent implements OnInit {
  faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {
  }
}
