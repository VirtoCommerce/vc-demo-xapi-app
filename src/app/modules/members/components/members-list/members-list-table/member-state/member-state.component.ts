import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vc-member-state',
  templateUrl: './member-state.component.html',
  styleUrls: [
    './member-state.component.scss',
  ],
})
export class MemberStateComponent implements OnInit {
  @Input() lockedState = '';

  imgLink = '';

  ngOnInit(): void {
    this.imgLink = this.lockedState === 'Active'
      ? 'assets/images/status-Active.svg'
      : 'assets/images/status-Inactive.svg';
  }
}
