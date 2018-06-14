import { TestBed, inject } from '@angular/core/testing';

import { RepresentativeSvrService } from './representative-svr.service';

describe('RepresentativeSvrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepresentativeSvrService]
    });
  });

  it('should be created', inject([RepresentativeSvrService], (service: RepresentativeSvrService) => {
    expect(service).toBeTruthy();
  }));
});
