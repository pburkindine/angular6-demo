import { Injectable } from '@angular/core';
import { Deserialize, Serialize } from 'cerialize';

import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _key: string = 'user';

  public getUser(): User {
    return Deserialize(sessionStorage.getItem(this._key));
  }

  public setUser(user: User): void {
    sessionStorage.setItem(this._key, JSON.stringify(Serialize(user)));
  }

  public clearUser(): void {
    sessionStorage.removeItem(this._key);
  }
}
