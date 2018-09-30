import { Injectable } from '@angular/core';
import { ConfigService } from '@ngx-config/core';
import { AuthService } from 'ng2-ui-auth';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/internal/operators';

import { LogServiceAbstract } from '../../core/interface/service/log.service.abstract';
import { LoginResult } from '../../core/model/payload/login-result.model';
import { User } from '../../core/model/user.model';
import { UserFactory } from '../../core/service/factory/user.factory';
import { UserService } from '../../core/service/user.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _loginUri: string;

  constructor(
    private _authService: AuthService,
    private _configService: ConfigService,
    private _logger: LogServiceAbstract,
    private _userFactory: UserFactory,
    private _userService: UserService
  ) {
    this._configure();
  }

  protected _configure(): void {
    // tslint:disable-next-line:no-any
    const config: any = this._configService.getSettings();

    this._loginUri = `${config.core.apiBaseUri}${config.auth.loginUri}`;
  }

  public login(email: string, password: string): Observable<LoginResult> {
    return this._authService
      .login({ email, password }, this._loginUri)
      .pipe(map(this._setUser.bind(this)));
  }

  protected _setUser(result: LoginResult): Observable<User> {
    const user: User = this._userFactory.getFromPayload(result);
    this._logger.devLog(user);
    this._userService.setUser(user);

    return of(user);
  }
}
