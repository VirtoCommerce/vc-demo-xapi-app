export const requiredMessage = `The {{ label }} is required`;

export const uniqueMessage = 'The {{ label }} should be unique';

export const emailIncorrectMessage = `Enter correct email please (ex. john@gmail.com)`;

export const passwordMismatchMessage = `Passwords are different`;

export const passwordPolicyMessages : { [key: string]: string } = {
  PasswordTooShort: `Password must be at least `,
  PasswordRequiresLower: `Passwords must have at least one lowercase ('a'-'z')`,
  PasswordRequiresUpper: `Passwords must have at least one uppercase ('A'-'Z')`,
  PasswordRequiresNonAlphanumeric: `Passwords must have at least one alphanumeric character`,
  PasswordRequiresDigit: `Passwords must have at least one digit ('0'-'9')`,
  PasswordRequiresUniqueChars: `Passwords is empty`,
  PasswordRequiresDefaultMessage: `Unexpected error`,
  Characters: ` characters`,
};
