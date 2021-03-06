import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'vc-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: [
    './action-buttons.component.scss',
  ],
})
export class ActionButtonsComponent {
  @Input()
  disableDelete = false;

  @Output()
  deleteClicked = new EventEmitter();

  editMember(): void {
    console.log('editMember');
  }

  deleteMember(): void {
    this.deleteClicked.emit();
  }
}
