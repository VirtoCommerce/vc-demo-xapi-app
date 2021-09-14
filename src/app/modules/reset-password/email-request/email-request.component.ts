import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { requestPasswordReset, requestPasswordResetVariables } from 'src/app/graphql/types/requestPasswordReset';
import requestPasswordResetQuery from 'src/app/graphql/queries/request-password-reset.graphql';

@Component({
  selector: 'vc-email-request',
  templateUrl: './email-request.component.html',
  styleUrls: [
    './email-request.component.scss',
  ],
})
export class EmailRequestComponent implements OnDestroy {
  unsubscriber = new Subject();

  constructor(
    private readonly apollo: Apollo,
    private readonly router: Router
  ) {}

  onSubmit(email: string): void {
    this.apollo.watchQuery<requestPasswordReset, requestPasswordResetVariables>({
      query: requestPasswordResetQuery,
      variables: {
        loginOrEmail: email,
        urlSuffix: 'reset-password/reset',
      },
    })
      .valueChanges
      .pipe(
        takeUntil(this.unsubscriber)
      )
      .subscribe(response => {
        if (response.data.requestPasswordReset) {
          void this.router.navigate([
            'reset-password',
            'thank-you',
          ], { state: { message: 'Reset link was sent to your email' } });
        }
        else {
          void this.router.navigate([
            '',
          ]);
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
