import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export function passwordMatchValidator(originalPasswordId: string): ValidatorFn {
  return (confirmedPasswordControl: AbstractControl): ValidationErrors | null => {
    const passwordControl = confirmedPasswordControl.root.get(originalPasswordId);
    if (passwordControl) {
      const unsubscriber = new Subject();
      passwordControl.valueChanges
        .pipe(takeUntil(unsubscriber))
        .subscribe(() => {
          confirmedPasswordControl.updateValueAndValidity();
          unsubscriber.next();
          unsubscriber.complete();
        });
    }
    const confirmedPassword = confirmedPasswordControl.value as string;
    const password = passwordControl?.value as string;
    return (password && confirmedPassword !== password) ? { passwordMatchValidator: true } : null;
  };
}
