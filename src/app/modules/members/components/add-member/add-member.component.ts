import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Member } from 'src/app/models/member.model';
import { passwordMatchValidator } from 'src/app/modules/validation/validators/password-match-validator';
import * as fromMembers from '../../store/members.actions';
import { selectGenderDictionaryItems } from '../../store/members.selectors';
import  * as validationMessages from 'src/app/modules/validation/constants/validation-messages.constants';
import { EmailUniquenessAsyncValidatorService }
  from 'src/app/modules/validation/validators/email-uniqueness-async-validator.service';
import { UsernameUniquenessAsyncValidatorService }
  from './../../../validation/validators/username-uniqueness-async-validator.service';
import { PasswordPolicyValidatorService } from
  'src/app/modules/validation/validators/password-policy-validator.service';

@Component({
  selector: 'vc-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: [
    './add-member.component.scss',
  ],
})
export class AddMemberComponent implements OnDestroy {
  passwords = new FormGroup(
    {
      password: new FormControl('', {
        updateOn: 'blur',
        asyncValidators: this.passwordPolicyValidator.validate.bind(this.passwordPolicyValidator),
      }),
      confirmPassword: new FormControl(''),
    },
    {
      updateOn: 'blur',
      validators: passwordMatchValidator(),
    }
  );

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl(''),
    email: new FormControl('', {
      updateOn: 'blur',
      validators: [
        Validators.required,
        Validators.email,
      ],
      asyncValidators: this.emailValidator.validate.bind(this.emailValidator),
    }),
    userName: new FormControl('', {
      updateOn: 'blur',
      validators: [
        Validators.required,
      ],
      asyncValidators: this.userNameValidator.validate.bind(this.userNameValidator),
    }),
    passwords: this.passwords,
  });

  genderDictionaryItems$ = this.store.select(selectGenderDictionaryItems);

  validationMessages = validationMessages;

  unsubscriber = new Subject();

  constructor(
    private readonly store: Store,
    private readonly emailValidator: EmailUniquenessAsyncValidatorService,
    private readonly userNameValidator: UsernameUniquenessAsyncValidatorService,
    private readonly passwordPolicyValidator: PasswordPolicyValidatorService
  ) {
    this.store.dispatch(fromMembers.getGenderDictionaryItems());
    this.form.valueChanges.pipe(takeUntil(this.unsubscriber)).subscribe(formValue => {
      this.store.dispatch(fromMembers.setNewMember({
        member: this.convertFormValueToMember(formValue),
      }));
    });
  }

  onSubmit(): void {
    this.store.dispatch(fromMembers.addMember({
      member: this.convertFormValueToMember(this.form.value),
    }));
  }

  convertFormValueToMember(formValue: {
    firstName: string,
    lastName: string,
    email: string,
    userName: string,
    passwords: {
      password: string,
      confirmPassword: string,
    },
    gender: string
  }): Member {
    return {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      email: formValue.email,
      userName: formValue.userName,
      password: formValue.passwords.password,
      gender: formValue.gender,
    };
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
