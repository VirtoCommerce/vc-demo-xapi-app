import { Component, Input } from '@angular/core';

@Component({
  selector: 'vc-member-status',
  templateUrl: './member-status.component.html',
  styleUrls: [
    './member-status.component.scss',
  ],
})
export class MemberStatusComponent {
  @Input() status = '';
}
