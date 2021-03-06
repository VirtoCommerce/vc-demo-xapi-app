import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Invitation } from 'src/app/models/invitation.model';
import * as validationMessages from 'src/app/modules/validation/constants/validation-messages.constants';
import * as fromMembers from '../../store/members.actions';
import { selectInvitationError } from '../../store/members.selectors';

@Component({
  selector: 'vc-invite-members',
  templateUrl: './invite-members.component.html',
  styleUrls: [
    './invite-members.component.scss',
  ],
})
export class InviteMembersComponent implements OnDestroy {
  form = new FormGroup({
    emails: new FormControl('', Validators.required),
    message: new FormControl(''),
  });

  invitationError$ = this.store.select(selectInvitationError);

  validationMessages = validationMessages;

  unsubscriber = new Subject();

  constructor(
    private readonly store: Store
  ) {
    this.form.valueChanges.pipe(takeUntil(this.unsubscriber)).subscribe(formValue => {
      this.store.dispatch(fromMembers.setInvitation({
        invitation: this.convertFormValueToInvitation(formValue),
      }));
    });
  }

  onSubmit(): void {
    this.store.dispatch(fromMembers.inviteMembers());
  }

  convertFormValueToInvitation(formValue: {
    emails: string,
    message: string,
  }): Invitation {
    return {
      emails: formValue.emails.split(/,|;|\r\n|\n/g).map(email => email.trim()),
      message: formValue.message,
    };
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
