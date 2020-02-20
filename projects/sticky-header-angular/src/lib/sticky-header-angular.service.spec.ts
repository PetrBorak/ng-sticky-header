import { TestBed } from '@angular/core/testing';

import { StickyHeaderAngularService } from './sticky-header-angular.service';

describe('StickyHeaderAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StickyHeaderAngularService = TestBed.get(StickyHeaderAngularService);
    expect(service).toBeTruthy();
  });
});
