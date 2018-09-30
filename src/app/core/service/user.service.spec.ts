import { TestBed } from '@angular/core/testing';

import { User } from '../model/user.model';
import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('should call sessionStorage on .getUser', () => {
    const service: UserService = TestBed.get(UserService);
    const getItemSpy: jasmine.Spy = spyOn(window.sessionStorage, 'getItem');

    service.getUser();
    expect(getItemSpy.calls.count()).toBe(1);
  });

  it('should call sessionStorage on .setUser', () => {
    const service: UserService = TestBed.get(UserService);
    const setItemSpy: jasmine.Spy = spyOn(window.sessionStorage, 'setItem');

    const user: User = new User('email@email.com', 'John Doe', new Date());
    service.setUser(user);
    expect(setItemSpy.calls.count()).toBe(1);
  });

  it('should return the same user that was added via sessionStorage', () => {
    pending(
      'TODO This test would be difficult to do well without decoupling an abstraction around sessionStorage'
    );
  });
});
