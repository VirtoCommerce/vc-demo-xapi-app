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

  buttonTitle = 'Add another one';

  constructor(private readonly router: Router) {
    this.message = this.router.getCurrentNavigation()?.extras?.state?.message as string || 'Thank you';
    this.showButton = this.message === 'Registration completed!';
  }
}
