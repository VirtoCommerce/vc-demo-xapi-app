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

  buttonTitle = '';

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    const state = history.state as Record<string, string> || {};
    this.message = state.message || 'Thank you';
    this.buttonTitle = state.buttonTitle;
  }

  async onSubmit(): Promise<void> {
    await this.router.navigate([
      '/registration',
    ]);
  }
}
