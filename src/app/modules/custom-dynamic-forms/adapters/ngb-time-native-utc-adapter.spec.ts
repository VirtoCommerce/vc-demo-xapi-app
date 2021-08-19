import { TestBed } from '@angular/core/testing';

import { NgbTimeNativeUTCAdapter } from './ngb-time-native-utc-adapter';

describe('NgbTimeNativeUtcAdapter', () => {
  let service: NgbTimeNativeUTCAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NgbTimeNativeUTCAdapter,
      ],
    });
    service = TestBed.inject(NgbTimeNativeUTCAdapter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
