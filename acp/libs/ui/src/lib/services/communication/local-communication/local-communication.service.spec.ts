import { TestBed } from '@angular/core/testing';

import { LocalCommunicationService } from './local-communication.service';

describe('LocalCommunicationService', () => {
  let service: LocalCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
