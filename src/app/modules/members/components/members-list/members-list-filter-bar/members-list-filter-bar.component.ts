import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FilterValues } from './filter-values.model';
import { InputValues } from './input-values.model';

@Component({
  selector: 'vc-members-list-filter-bar',
  templateUrl: './members-list-filter-bar.component.html',
  styleUrls: [
    './members-list-filter-bar.component.scss',
  ],
})

export class MembersListFilterBarComponent {
  inputFilterValue = '';

  selectFilterValue = 'all';

  @Output() filterChange = new EventEmitter<FilterValues>();

  constructor(private readonly router: Router) {}

  onValueChanges({ value, emitterElement } : InputValues): void {
    switch (emitterElement) {
    case 'input':
      this.inputFilterValue = value;
      break;
    case 'select':
      this.selectFilterValue = value;
      break;
    default:
      break;
    }
    this.filterChange.emit({
      inputFilterValue: this.inputFilterValue,
      selectFilterValue: this.selectFilterValue,
    });
  }
}
