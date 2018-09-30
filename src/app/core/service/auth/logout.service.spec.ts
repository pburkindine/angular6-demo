import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ConfigService } from '@ngx-config/core';
import { AuthService } from 'ng2-ui-auth';
import { ToastrService } from 'ngx-toastr';
import { of, throwError } from 'rxjs';

import { LogoutService } from './logout.service';

let authServiceStub: jasmine.SpyObj<AuthService>;
let configServiceStub: jasmine.SpyObj<ConfigService>;
let httpStub: jasmine.SpyObj<HttpClient>;
let routerStub: jasmine.SpyObj<Router>;
let toastrStub: jasmine.SpyObj<ToastrService>;

// tslint:disable-next-line:no-any
const testConfig: any = {
  core: {
    apiBaseUri: 'https://www.test.com/api',
  },
  auth: {
    logoutUri: '/auth/logout',
  },
};

function createStubs(): void {
  authServiceStub = jasmine.createSpyObj('AuthService', ['logout']);
  configServiceStub = jasmine.createSpyObj('ConfigService', ['getSettings']);
  configServiceStub.getSettings.and.returnValue(testConfig);
  httpStub = jasmine.createSpyObj('HttpClient', ['post']);
  routerStub = jasmine.createSpyObj('Router', ['navigate']);
  toastrStub = jasmine.createSpyObj('ToastrService', ['error']);
}

function setPositiveLogoutResult(): void {
  httpStub.post.and.returnValue(of(null));
}

function setNegativeLogoutResult(expectedError: string): void {
  httpStub.post.and.callFake(() => throwError({ msg: expectedError }));
}

describe('LogoutService', () => {
  beforeEach(() => {
    createStubs();

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: authServiceStub },
        { provide: ConfigService, useValue: configServiceStub },
        { provide: HttpClient, useValue: httpStub },
        { provide: Router, useValue: routerStub },
        { provide: ToastrService, useValue: toastrStub },
      ],
    });
  });

  it('should be created', () => {
    const service: LogoutService = TestBed.get(LogoutService);
    expect(service).toBeTruthy();
  });

  it('should set the logout uri from config', () => {
    const service: LogoutService = TestBed.get(LogoutService);
    setPositiveLogoutResult();

    const expectedUri: string = `${testConfig.core.apiBaseUri}${
      testConfig.auth.logoutUri
    }`;

    service.logout();
    expect(httpStub.post.calls.argsFor(0)[0]).toEqual(expectedUri);
  });

  it('should call authService.logout()', async () => {
    const service: LogoutService = TestBed.get(LogoutService);

    setPositiveLogoutResult();

    service.logout();
    expect(authServiceStub.logout.calls.count()).toEqual(1);
  });

  it('should navigate to the login page', async () => {
    const service: LogoutService = TestBed.get(LogoutService);

    const expectedRoute: string[] = ['auth', 'login'];
    setPositiveLogoutResult();

    service.logout();
    expect(routerStub.navigate.calls.count()).toEqual(1);
    expect(routerStub.navigate.calls.argsFor(0)).toEqual([expectedRoute]);
  });
});
