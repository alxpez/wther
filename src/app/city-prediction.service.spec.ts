import { TestBed, inject } from '@angular/core/testing';

import { CityPredictionService } from './city-prediction.service';

describe('CityPredictionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityPredictionService]
    });
  });

  it('should ...', inject([CityPredictionService], (service: CityPredictionService) => {
    expect(service).toBeTruthy();
  }));
});
