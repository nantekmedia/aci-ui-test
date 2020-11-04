import { TestBed } from '@angular/core/testing';

import { HeaderSubService } from './header-sub.service';

describe('HeaderSubService', () => {
  let service: HeaderSubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderSubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
