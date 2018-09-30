import { Injectable } from '@angular/core';
import * as jwtDecode from 'jwt-decode';

import { JwtPayload } from '../../model/payload/jwt-payload.model';
import { LoginResult } from '../../model/payload/login-result.model';
import { User } from '../../model/user.model';
import { DateHelperService } from '../helper/date-helper.service';

@Injectable({
  providedIn: 'root',
})
export class UserFactory {
  constructor(private _dateHelper: DateHelperService) {}

  public getFromPayload(payload: LoginResult): User {
    const decodedToken: JwtPayload = jwtDecode(payload.token);

    return this.getUser(
      decodedToken.email,
      decodedToken.name,
      payload.lastLogin
        ? this._dateHelper.getDateFromUtcString(payload.lastLogin)
        : null
    );
  }

  public getUser(
    email: string,
    name: string,
    lastLogin: Date,
    password?: string
  ): User {
    return new User(email, name, lastLogin, password);
  }
}
