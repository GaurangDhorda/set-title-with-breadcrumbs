import { TestBed } from '@angular/core/testing';

import { SetTitleWithBreadcrumbsService } from './set-title-with-breadcrumbs.service';

describe('SetTitleWithBreadcrumbsService', () => {
  let service: SetTitleWithBreadcrumbsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetTitleWithBreadcrumbsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
