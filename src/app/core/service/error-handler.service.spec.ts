import { TestBed } from '@angular/core/testing';

import { LogServiceAbstract } from '../interface/service/log.service.abstract';
import { ErrorHandlerService } from './error-handler.service';

let logServiceStub: jasmine.SpyObj<LogServiceAbstract>;

function createStubs(): void {
  logServiceStub = jasmine.createSpyObj('LogService', ['devLog', 'error']);
}

describe('ErrorHandlerService', () => {
  beforeEach(() => {
    createStubs();

    TestBed.configureTestingModule({
      providers: [{ provide: LogServiceAbstract, useValue: logServiceStub }],
    });
  });

  it('should be created', () => {
    const service: ErrorHandlerService = TestBed.get(ErrorHandlerService);
    expect(service).toBeTruthy();
  });

  it('should call logger.devLog with the provided value to log to console in dev', () => {
    const service: ErrorHandlerService = TestBed.get(ErrorHandlerService);

    // tslint:disable-next-line:no-any
    const expectedValue: any = { msg: 'Test value' };

    service.handleError(expectedValue);
    expect(logServiceStub.devLog.calls.count()).toBe(1);
    expect(logServiceStub.devLog.calls.argsFor(0)).toEqual([expectedValue]);
  });

  it('should call logger.error with the provided value to output to the server in prod', () => {
    const service: ErrorHandlerService = TestBed.get(ErrorHandlerService);

    // tslint:disable-next-line:no-any
    const expectedValue: any = { msg: 'Test value' };

    service.handleError(expectedValue);
    expect(logServiceStub.error.calls.count()).toBe(1);
    expect(logServiceStub.error.calls.argsFor(0)).toEqual([expectedValue]);
  });
});
