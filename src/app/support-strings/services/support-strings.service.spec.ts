/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SupportStringsService } from './support-strings.service';

describe('Service: SupportStrings', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupportStringsService]
    });
  });

  it('should ...', inject([SupportStringsService], (service: SupportStringsService) => {
    expect(service).toBeTruthy();
  }));
});
