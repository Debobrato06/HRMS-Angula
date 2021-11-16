import { TestBed } from '@angular/core/testing';

import { AmdUserServiceService } from './amd-user-service.service';

describe('AmdUserServiceService', () => {
  let service: AmdUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmdUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
