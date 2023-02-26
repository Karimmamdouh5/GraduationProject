import { TestBed } from '@angular/core/testing';

import { ServicesTrialService } from './services-trial.service';

describe('ServicesTrialService', () => {
  let service: ServicesTrialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesTrialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
