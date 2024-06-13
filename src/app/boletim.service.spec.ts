/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BoletimService } from './boletim.service';

describe('Service: Boletim', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoletimService]
    });
  });

  it('should ...', inject([BoletimService], (service: BoletimService) => {
    expect(service).toBeTruthy();
  }));
});
