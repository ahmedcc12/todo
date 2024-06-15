import { TestBed } from '@angular/core/testing';

import { BaordService } from './baord.service';

describe('BaordService', () => {
  let service: BaordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
