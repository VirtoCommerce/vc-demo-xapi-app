import { Component, Input } from '@angular/core';

@Component({
  selector: 'vc-dashboard-button',
  templateUrl: './dashboard-button.component.html',
  styleUrls: [
    './dashboard-button.component.scss',
  ],
})

export class DashboardButtonComponent {
  @Input() buttonLink =  '';

  @Input() buttonIconSrc =  '';

  @Input() buttonCaption =  '';

  @Input() buttonDescription =  '';
}
