import { TestBed } from '@angular/core/testing';

import { LeaveAppService } from './leave-app.service';

describe('LeaveAppService', () => {
  let service: LeaveAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
