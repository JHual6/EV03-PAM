import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { rolprofesorGuard } from './rolprofesor.guard';

describe('rolprofesorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => rolprofesorGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
