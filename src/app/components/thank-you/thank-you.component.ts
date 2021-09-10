import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vc-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: [
    './thank-you.component.scss',
  ],
})

export class ThankYouComponent {
  message = '';

  showButton = false;

  buttonTitle = '';

  content = [
    {
      message: 'Registration completed!',
      buttonTitle: 'Add another one',
    },
  ]

  constructor(private readonly router: Router) {
    this.message = this.router.getCurrentNavigation()?.extras?.state?.message as string || 'Thank you';
    const contentItemIdx = this.content.findIndex(item => item.message === this.message);
    this.showButton = contentItemIdx > -1;
    this.buttonTitle = this.showButton ? this.content[contentItemIdx]?.buttonTitle  : '';
  }
}
