import { TestBed } from '@angular/core/testing';

import { NgbTimeNativeUTCAdapter } from './ngb-time-native-utc-adapter';

describe('NgbTimeNativeUtcAdapterService', () => {
  let service: NgbTimeNativeUTCAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgbTimeNativeUTCAdapter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
