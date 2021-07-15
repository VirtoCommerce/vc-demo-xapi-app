import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'vc-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
  ],
})
export class AppComponent {
  title = 'VirtoCommerce XAPI App (DEMO)';

  public constructor(titleService: Title) {
    titleService.setTitle(this.title);
  }
}
