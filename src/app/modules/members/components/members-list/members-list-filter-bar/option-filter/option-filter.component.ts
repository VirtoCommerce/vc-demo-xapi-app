import { Component, EventEmitter, Output } from '@angular/core';
import { InputValues } from '../input-values.model';

@Component({
  selector: 'vc-option-filter',
  templateUrl: './option-filter.component.html',
  styleUrls: [
    './option-filter.component.scss',
  ],
})
export class OptionFilterComponent {
  @Output() valueChange = new EventEmitter<InputValues>();

  onSelectInputUpdate(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    const emitterElement =  'select';
    this.valueChange.emit({
      value,
      emitterElement,
    });
  }
}
