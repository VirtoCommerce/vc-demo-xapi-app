import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(): ValidatorFn {
  return (groupControl: AbstractControl): ValidationErrors | null => {
    const confirmedPassword = groupControl.get('confirmPassword');
    const password = groupControl.get('password');
    return (password?.value !== confirmedPassword?.value) ? { passwordMatchValidator: true } : null;
  };
}
