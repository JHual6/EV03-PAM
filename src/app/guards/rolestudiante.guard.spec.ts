import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { rolestudianteGuard } from './rolestudiante.guard';

describe('rolestudianteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => rolestudianteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
