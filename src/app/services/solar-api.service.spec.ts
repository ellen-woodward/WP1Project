import { TestBed } from '@angular/core/testing';

import { SolarAPIService } from './solar-api.service';

describe('SolarAPIService', () => {
  let service: SolarAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolarAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
