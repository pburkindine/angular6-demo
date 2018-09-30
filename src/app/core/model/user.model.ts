import { autoserialize } from 'cerialize';

export class User {
  @autoserialize
  private readonly _email: string;
  @autoserialize
  private readonly _lastLogin: Date;
  @autoserialize
  private readonly _name: string;
  @autoserialize
  private readonly _password: string;

  constructor(email: string, name: string, lastLogin: Date, password?: string) {
    this._email = email;
    this._lastLogin = lastLogin;
    this._name = name;
    this._password = password;
  }

  get email(): string {
    return this._email;
  }

  get lastLogin(): Date {
    return this._lastLogin;
  }

  get name(): string {
    return this._name;
  }

  get password(): string {
    return this._password;
  }
}
