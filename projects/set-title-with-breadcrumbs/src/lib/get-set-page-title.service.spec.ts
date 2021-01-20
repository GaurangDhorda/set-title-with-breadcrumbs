import { TestBed } from '@angular/core/testing';

import { GetSetPageTitleService } from './get-set-page-title.service';

describe('GetSetPageTitleService', () => {
  let service: GetSetPageTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSetPageTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
