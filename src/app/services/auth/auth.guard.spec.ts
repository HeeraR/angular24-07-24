import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let routerMock = { navigate: jasmine.createSpy('navigate') };

  const routeMock: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
  const stateMock: RouterStateSnapshot = {} as RouterStateSnapshot;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: routerMock }
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow activation when logged in', () => {
    localStorage.setItem('isLoggedIn', 'true');
    expect(guard.canActivate(routeMock, stateMock)).toBeTrue();
  });

  it('should prevent activation when not logged in', () => {
    localStorage.setItem('isLoggedIn', 'false');
    expect(guard.canActivate(routeMock, stateMock)).toBeFalse();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
  });
});
