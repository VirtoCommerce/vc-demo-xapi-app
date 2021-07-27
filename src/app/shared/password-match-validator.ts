import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(originalPasswordId: string): ValidatorFn {
  return (confirmedPasswordControl: AbstractControl): ValidationErrors | null => {
    const password = confirmedPasswordControl.root.get(originalPasswordId)?.value as string;
    const confirmedPassword = confirmedPasswordControl.value as string;
    return (password && confirmedPassword !== password) ? { passwordMatchValidator: true } : null;
  };
}
