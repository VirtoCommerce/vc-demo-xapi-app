import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vc-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: [
    './thank-you.component.scss',
  ],
})

export class ThankYouComponent implements OnInit {
  message = '';

  hideButton = true;

  buttonTitle = '';

  content = [
    {
      message: 'Registration completed!',
      buttonTitle: 'Add another one',
    },
  ]

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    const state = history.state as Record<string, string>;
    this.message = state.message || 'Thank you';
    const contentItemIdx = this.content.findIndex(item => item.message === this.message);
    this.hideButton = contentItemIdx === -1;
    this.buttonTitle = this.hideButton ? '' : this.content[contentItemIdx]?.buttonTitle;
  }

  onSubmit(): void {
    void this.router.navigate([
      '/registration',
    ]);
  }
}
