import { Injectable } from '@angular/core';
import * as jwtDecode from 'jwt-decode';

import { JwtPayload } from '../../model/payload/jwt-payload.model';
import { LoginResult } from '../../model/payload/login-result.model';
import { UserPayload } from '../../model/payload/user-payload.model';
import { User } from '../../model/user.model';
import { DateHelperService } from '../helper/date-helper.service';

@Injectable({
  providedIn: 'root',
})
export class UserFactory {
  constructor(private _dateHelper: DateHelperService) {}

  public getPayload(user: User): UserPayload {
    return {
      name: user.name,
      email: user.email,
      password: user.password,
    };
  }

  public getFromFormData(formData: UserPayload): User {
    return this.getUser(formData.email, formData.name, null, formData.password);
  }

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
