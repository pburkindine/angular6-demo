import { TestBed } from '@angular/core/testing';
import { ConfigService } from '@ngx-config/core';
import { AuthService } from 'ng2-ui-auth';

import { LogServiceAbstract } from '../../core/interface/service/log.service.abstract';
import { UserFactory } from '../../core/service/factory/user.factory';
import { UserService } from '../../core/service/user.service';
import { LoginService } from './login.service';

// tslint:disable-next-line:no-any
const testConfig: any = {
  core: {
    apiBaseUri: 'https://www.test.com/api',
  },
  auth: {
    loginUri: '/auth/login',
  },
};

let authServiceStub: jasmine.SpyObj<AuthService>;
let configServiceStub: jasmine.SpyObj<ConfigService>;
let logServiceStub: jasmine.SpyObj<LogServiceAbstract>;
let userFactoryStub: jasmine.SpyObj<UserFactory>;
let userServiceStub: jasmine.SpyObj<UserService>;

function createStubs(): void {
  authServiceStub = jasmine.createSpyObj('AuthService', ['login']);
  configServiceStub = jasmine.createSpyObj('ConfigService', ['getSettings']);
  configServiceStub.getSettings.and.returnValue(testConfig);
  logServiceStub = jasmine.createSpyObj('LogService', ['devLog']);
  userFactoryStub = jasmine.createSpyObj('UserFactory', ['getFromPayload']);
  userServiceStub = jasmine.createSpyObj('UserService', ['setUser']);
}

describe('LoginService', () => {
  beforeEach(() => {
    createStubs();

    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthService,
          useValue: authServiceStub,
        },
        { provide: ConfigService, useValue: configServiceStub },
        {
          provide: LogServiceAbstract,
          useValue: logServiceStub,
        },
        {
          provide: UserFactory,
          useValue: userFactoryStub,
        },
        {
          provide: UserService,
          useValue: userServiceStub,
        },
      ],
    });
  });

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});
