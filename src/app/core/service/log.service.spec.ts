import { TestBed } from '@angular/core/testing';
import { LoggerConfig, NGXLogger, NgxLoggerLevel } from 'ngx-logger';

import { LogService } from './log.service';

let actualLoggerStub: jasmine.SpyObj<NGXLogger>;

const originalLoggerConfig: LoggerConfig = {
  level: NgxLoggerLevel.OFF,
  serverLogLevel: NgxLoggerLevel.ERROR,
  serverLoggingUrl: 'https://original.logging.url/error',
};

function createStubs(): void {
  actualLoggerStub = jasmine.createSpyObj('NGXLogger', [
    'debug',
    'devLog',
    'error',
    'log',
    'updateConfig',
    'getConfigSnapshot',
  ]);
  actualLoggerStub.getConfigSnapshot.and.returnValue(originalLoggerConfig);
}

describe('LogService', () => {
  beforeEach(() => {
    createStubs();

    TestBed.configureTestingModule({
      providers: [
        LogService,
        { provide: NGXLogger, useValue: actualLoggerStub },
      ],
    });
  });

  it('should be created', () => {
    const service: LogService = TestBed.get(LogService);
    expect(service).toBeTruthy();
  });

  it('should pass call to .debug() to actual logger', () => {
    const service: LogService = TestBed.get(LogService);

    // tslint:disable-next-line:no-any
    const expectedValue: any = { msg: 'Test value 1' };

    service.debug(expectedValue);
    expect(actualLoggerStub.debug.calls.count()).toBe(1);
    expect(actualLoggerStub.debug.calls.argsFor(0)).toEqual([expectedValue]);
  });

  it('should pass call to .devLog() to console if in development', () => {
    pending(
      'TODO - This is driven off environment.ts file, need to use process.env, e.g.'
    );
  });

  it('should pass call to .error() to actual logger', () => {
    const service: LogService = TestBed.get(LogService);

    // tslint:disable-next-line:no-any
    const expectedValue: any = { msg: 'Test value 2' };

    service.error(expectedValue);
    expect(actualLoggerStub.error.calls.count()).toBe(1);
    expect(actualLoggerStub.error.calls.argsFor(0)).toEqual([expectedValue]);
  });

  it('should pass call to .log() actual logger', () => {
    const service: LogService = TestBed.get(LogService);

    // tslint:disable-next-line:no-any
    const expectedValue: any = { msg: 'Test value 3' };

    service.log(expectedValue);
    expect(actualLoggerStub.log.calls.count()).toBe(1);
    expect(actualLoggerStub.log.calls.argsFor(0)).toEqual([expectedValue]);
  });

  it('should pass updateLoggerUri to NgxLogger correctly', () => {
    const service: LogService = TestBed.get(LogService);

    const expectedValue: string = 'https://new.logger.uri/error';

    service.updateLoggerUri(expectedValue);
    expect(actualLoggerStub.updateConfig.calls.count()).toBe(1);
    expect(
      actualLoggerStub.updateConfig.calls.argsFor(0)[0].serverLoggingUrl
    ).toBe(expectedValue);
  });

  it('should updateLoggerUri to NgxLogger without changes logging level values', () => {
    const service: LogService = TestBed.get(LogService);

    const expectedValue: string = 'https://new.logger.uri/error';

    service.updateLoggerUri(expectedValue);
    // tslint:disable-next-line:no-any
    const updatedConfig: LoggerConfig = actualLoggerStub.updateConfig.calls.argsFor(
      0
    )[0];
    expect(updatedConfig.level).toBe(originalLoggerConfig.level);
    expect(updatedConfig.serverLogLevel).toBe(
      originalLoggerConfig.serverLogLevel
    );
  });
});
