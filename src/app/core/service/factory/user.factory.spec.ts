import { TestBed } from '@angular/core/testing';

import { LoginResult } from '../../model/payload/login-result.model';
import { User } from '../../model/user.model';
import { UserFactory } from './user.factory';

describe('UserFactory', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserFactory = TestBed.get(UserFactory);
    expect(service).toBeTruthy();
  });

  it('should create a user from the response payload with expected properties', () => {
    const service: UserFactory = TestBed.get(UserFactory);

    // tslint:disable:max-line-length
    const payload: LoginResult = {
      token:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUGV0ZSBCdXJraW5kaW5lIiwiZW1haWwiOiJwYnVya2luZDExM0BnbWFpbC5jb20iLCJpYXQiOjE1MzgzMzgzMDMsImV4cCI6MTUzODM0MDEwM30.VDIDmkY4nUVQIU6yrpCzlfh4MaeOzoFbKrVrz5YkuKY',
      lastLogin: '2018-09-30T19:52:56.041Z',
    };
    // tslint:enable:max-line-length

    const user: User = service.getFromPayload(payload);
    expect(user.email).toBe('pburkind113@gmail.com');
    expect(user.name).toBe('Pete Burkindine');
    expect(user.lastLogin.getUTCDate()).toBe(30);
    expect(user.password).toBeUndefined();
  });

  it('should throw an error if the JWT cannot be decoded into the proper model', () => {
    pending('TODO No time for this right now');
  });

  it('should create a user with predicted properties', () => {
    const service: UserFactory = TestBed.get(UserFactory);

    const email: string = 'email@email.com';
    const name: string = 'John Doe';
    const lastLogin: Date = new Date();
    const testPass: string = 'Test@123';

    const user: User = service.getUser(email, name, lastLogin, testPass);
    expect(user.email).toBe(email);
    expect(user.name).toBe(name);
    expect(user.lastLogin).toBe(lastLogin);
    expect(user.password).toBe(testPass);
  });
});
