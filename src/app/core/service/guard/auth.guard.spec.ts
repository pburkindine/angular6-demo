import { TestBed } from '@angular/core/testing';
import { AuthService } from 'ng2-ui-auth';

import { LogoutService } from '../auth/logout.service';
import { AuthGuard } from './auth.guard';

let authServiceStub: jasmine.SpyObj<AuthService>;
let logoutServiceStub: jasmine.SpyObj<LogoutService>;

function createStubs(): void {
  authServiceStub = jasmine.createSpyObj('AuthService', ['isAuthenticated']);
  logoutServiceStub = jasmine.createSpyObj('LogoutService', ['logout']);
}

describe('AuthGuard', () => {
  beforeEach(() => {
    createStubs();

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: authServiceStub },
        { provide: LogoutService, useValue: logoutServiceStub },
      ],
    });
  });

  it('should be created', () => {
    const guard: AuthGuard = TestBed.get(AuthGuard);
    expect(guard).toBeTruthy();
  });

  it('should return true if authenticated', () => {
    const guard: AuthGuard = TestBed.get(AuthGuard);

    authServiceStub.isAuthenticated.and.returnValue(true);
    const result: boolean = guard.canActivate();
    expect(result).toBe(true);
  });

  it('should return false if not authenticated', () => {
    const guard: AuthGuard = TestBed.get(AuthGuard);

    authServiceStub.isAuthenticated.and.returnValue(false);
    const result: boolean = guard.canActivate();
    expect(result).toBe(false);
  });

  it('should logout if not authenticated', () => {
    const guard: AuthGuard = TestBed.get(AuthGuard);

    authServiceStub.isAuthenticated.and.returnValue(false);
    guard.canActivate();
    expect(logoutServiceStub.logout.calls.count()).toBe(1);
  });
});
