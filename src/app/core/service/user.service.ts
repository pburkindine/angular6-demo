import { Injectable } from '@angular/core';
import { Deserialize, Serialize } from 'cerialize';

import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public getUser(): User {
    return Deserialize(sessionStorage.getItem('user'));
  }

  public setUser(user: User): void {
    sessionStorage.setItem('user', JSON.stringify(Serialize(user)));
  }
}
