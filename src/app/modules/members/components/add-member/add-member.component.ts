import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Member } from 'src/app/models/member.model';
import * as fromMembers from '../../store/members.actions';
import { selectGenderDictionaryItems } from '../../store/members.selectors';

@Component({
  selector: 'vc-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: [
    './add-member.component.scss',
  ],
})
export class AddMemberComponent implements OnDestroy {
  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    gender: new FormControl(''),
    email: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  genderDictionaryItems$ = this.store.select(selectGenderDictionaryItems);

  unsubscriber = new Subject();

  constructor(private readonly store: Store) {
    this.store.dispatch(fromMembers.getGender());
    this.form.valueChanges.pipe(takeUntil(this.unsubscriber)).subscribe(member => {
      this.store.dispatch(fromMembers.setNewMember({
        member: member as Member,
      }));
    });
  }

  onSubmit(): void {
    this.store.dispatch(fromMembers.addMember({
      member: this.form.value as Member,
    }));
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
