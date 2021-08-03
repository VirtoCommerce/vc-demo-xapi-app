import { TestBed } from '@angular/core/testing';

import { EmailUniquenessAsyncValidatorService } from './email-uniqueness-async-validator.service';

describe('EmailUniquenessAsyncValidatorService', () => {
  let service: EmailUniquenessAsyncValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailUniquenessAsyncValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
