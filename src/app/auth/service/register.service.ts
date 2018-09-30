import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '@ngx-config/core';
import { Observable } from 'rxjs';

import { ApiResponse } from '../../core/model/payload/api-response.model';
import { User } from '../../core/model/user.model';
import { UserFactory } from '../../core/service/factory/user.factory';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private _registerUri: string;

  constructor(
    private _configService: ConfigService,
    private _http: HttpClient,
    private _userFactory: UserFactory
  ) {
    this._configure();
  }

  protected _configure(): void {
    // tslint:disable-next-line:no-any
    const config: any = this._configService.getSettings();

    this._registerUri = `${config.core.apiBaseUri}${config.auth.registerUri}`;
  }

  public register(user: User): Observable<ApiResponse> {
    return this._http.post<ApiResponse>(
      this._registerUri,
      this._userFactory.getPayload(user)
    );
  }
}
