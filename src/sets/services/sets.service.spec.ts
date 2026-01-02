/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SetsService } from './sets.service';

describe('Service: Sets', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetsService]
    });
  });

  it('should ...', inject([SetsService], (service: SetsService) => {
    expect(service).toBeTruthy();
  }));
});
