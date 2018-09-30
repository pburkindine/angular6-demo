import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from 'ng2-ui-auth';

import { LogoutService } from '../auth/logout.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public constructor(
    private _authService: AuthService,
    private _logoutService: LogoutService
  ) {}

  public canActivate(): boolean {
    if (this._authService.isAuthenticated()) {
      return true;
    }

    this._logoutService.logout();

    return false;
  }
}
