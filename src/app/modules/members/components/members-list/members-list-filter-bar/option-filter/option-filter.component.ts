import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'vc-option-filter',
  templateUrl: './option-filter.component.html',
  styleUrls: [
    './option-filter.component.scss',
  ],
})
export class OptionFilterComponent {
  @Output() optionFilterChange = new EventEmitter<string>();

  onSelectInputUpdate(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.optionFilterChange.emit(value);
  }
}
