import { Component, Input } from '@angular/core';

@Component({
  selector: 'vc-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: [
    './dashboard-item.component.scss',
  ],
})

export class DashboardItemComponent {
  @Input() buttonLink =  '';

  @Input() buttonIconSrc =  '';

  @Input() buttonCaption =  '';

  @Input() buttonDescription =  '';
}
