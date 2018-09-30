import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '@ngx-config/core';
import { AuthService } from 'ng2-ui-auth';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';

import { ApiResponse } from '../../model/api-response.model';
import { ErrorResponse } from '../../model/error-response.model';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  private _logoutUri: string;

  constructor(
    private _authService: AuthService,
    private _configService: ConfigService,
    private _http: HttpClient,
    private _router: Router,
    private _toastr: ToastrService
  ) {
    this._configure();
  }

  protected _configure(): void {
    // tslint:disable-next-line:no-any
    const config: any = this._configService.getSettings();

    this._logoutUri = `${config.core.apiBaseUri}${config.auth.logoutUri}`;
  }

  public logout(): void {
    this._authService.logout();
    this._router.navigate(['auth', 'login']);

    this._http.post<ApiResponse>(this._logoutUri, null).pipe(
      catchError((err: ErrorResponse) => {
        this._toastr.error(err.msg);

        return of(err);
      })
    );
  }
}
