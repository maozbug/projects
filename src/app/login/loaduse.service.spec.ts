import { TestBed, inject } from '@angular/core/testing';

import { LoaduseService } from './loaduse.service';

describe('LoaduseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaduseService]
    });
  });

  it('should be created', inject([LoaduseService], (service: LoaduseService) => {
    expect(service).toBeTruthy();
  }));
});
