export const requiredMessage = `The {{ label }} is required`;

export const maxLengthMessage =
  `The {{ label }} can be a maximum of {{ validator.requiredLength }} characters`;

export const uniqueMessage = 'The {{ label }} should be unique';

export const emailIncorrectMessage = `Enter correct email please (ex. john@gmail.com)`;

export const passwordMismatchMessage = `Passwords are different`;

export const passwordPolicyMessages : { [key: string]: string } = {
  PasswordTooShort: `Password must be at least {{ validator.errorParameter }} characters`,
  PasswordRequiresLower: `Passwords must have at least one lowercase ('a'-'z')`,
  PasswordRequiresUpper: `Passwords must have at least one uppercase ('A'-'Z')`,
  PasswordRequiresNonAlphanumeric: `Passwords must have at least one non-alphanumeric character`,
  PasswordRequiresDigit: `Passwords must have at least one digit ('0'-'9')`,
  PasswordRequiresUniqueChars: `Passwords must have at least {{ validator.errorParameter }} unique characters`,
  PasswordRequiresDefaultMessage: `Unexpected error`,
};

export const resetPasswordErrors : { [key: string]: string } = {
  InvalidToken: 'Token is invalid',
  UserNotFound: 'User not found',
  UserNotEditable: 'You can not edit this User',
};
