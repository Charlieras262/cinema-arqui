import { TestBed } from '@angular/core/testing';

import { NoLogedinGuard } from './no-logedin.guard';

describe('NoLogedinGuard', () => {
  let guard: NoLogedinGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoLogedinGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
