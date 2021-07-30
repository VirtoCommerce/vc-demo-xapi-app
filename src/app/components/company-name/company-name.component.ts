import { Component, Input } from '@angular/core';

@Component({
  selector: 'vc-company-name',
  templateUrl: './company-name.component.html',
  styleUrls: [
    './company-name.component.scss',
  ],
})
export class CompanyNameComponent {
  @Input()
  companyName?: string;

  constructor() { }
}
