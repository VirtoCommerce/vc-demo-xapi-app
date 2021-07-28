import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Subscription } from 'rxjs';

export function passwordMatchValidator(originalPasswordId: string): ValidatorFn {
  return (confirmedPasswordControl: AbstractControl): ValidationErrors | null => {
    const passwordControl = confirmedPasswordControl.root.get(originalPasswordId);
    if (passwordControl) {
      const subscription: Subscription = passwordControl.valueChanges.subscribe(() => {
        confirmedPasswordControl.updateValueAndValidity();
        subscription.unsubscribe();
      });
    }
    const confirmedPassword = confirmedPasswordControl.value as string;
    const password = passwordControl?.value as string;
    return (password && confirmedPassword !== password) ? { passwordMatchValidator: true } : null;
  };
}
