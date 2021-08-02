import { TestBed } from '@angular/core/testing';

import { UsernameUniquenessAsyncValidatorService } from './username-uniqueness-async-validator.service';

describe('UsernameUniquenessAsyncValidatorService', () => {
  let service: UsernameUniquenessAsyncValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsernameUniquenessAsyncValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
