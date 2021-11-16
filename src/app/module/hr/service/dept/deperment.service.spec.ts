import { TestBed } from '@angular/core/testing';

import { DepermentService } from './deperment.service';

describe('DepermentService', () => {
  let service: DepermentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepermentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
