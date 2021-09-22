import { Component, EventEmitter, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { InputValues } from '../../../members-list/models/input-values.model';

@Component({
  selector: 'vc-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: [
    './search-input.component.scss',
  ],
})
export class SearchInputComponent {
  faSearch = faSearch;

  @Output() valueChange = new EventEmitter<InputValues>();

  onSearchInputUpdate(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    const emitterElement =  'input';
    this.valueChange.emit({
      value,
      emitterElement,
    });
  }
}
