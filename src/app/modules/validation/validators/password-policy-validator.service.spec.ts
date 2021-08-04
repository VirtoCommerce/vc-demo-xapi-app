import { TestBed } from '@angular/core/testing';

import { PasswordPolicyValidatorService } from './password-policy-validator.service';

describe('PasswordPolicyValidatorService', () => {
  let service: PasswordPolicyValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordPolicyValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
