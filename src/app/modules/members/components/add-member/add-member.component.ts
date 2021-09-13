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

@Component({
  selector: 'vc-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: [
    './add-member.component.scss',
  ],
})
export class AddMemberComponent implements OnDestroy {
  passwords = new FormGroup({
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  }, passwordMatchValidator());

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    userName: new FormControl('', Validators.required),
    passwords: this.passwords,
  });

  genderDictionaryItems$ = this.store.select(selectGenderDictionaryItems);

  validationMessages = validationMessages;

  unsubscriber = new Subject();

  constructor(private readonly store: Store) {
    this.store.dispatch(fromMembers.getGender());
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
