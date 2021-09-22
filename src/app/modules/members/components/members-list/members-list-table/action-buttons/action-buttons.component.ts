import { Component } from '@angular/core';

@Component({
  selector: 'vc-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: [
    './action-buttons.component.scss',
  ],
})
export class ActionButtonsComponent {
  editMember(): void {
    console.log('editAddress');
  }

  deleteMember(): void {
    console.log('deleteMember');
  }
}
