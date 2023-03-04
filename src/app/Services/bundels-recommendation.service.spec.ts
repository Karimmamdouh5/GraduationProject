import { TestBed } from '@angular/core/testing';

import { BundelsRecommendationService } from './bundels-recommendation.service';

describe('BundelsRecommendationService', () => {
  let service: BundelsRecommendationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BundelsRecommendationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
