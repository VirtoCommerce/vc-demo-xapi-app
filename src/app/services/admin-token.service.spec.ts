import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AdminTokenService } from './admin-token.service';

describe('AdminTokenService', () => {
  let service: AdminTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(AdminTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
