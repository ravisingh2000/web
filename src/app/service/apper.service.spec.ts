import { TestBed } from '@angular/core/testing';

import { ApperService } from './apper.service';

describe('ApperService', () => {
  let service: ApperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
