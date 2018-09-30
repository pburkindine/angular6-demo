import { Injectable } from '@angular/core';
import { LoggerConfig, NGXLogger } from 'ngx-logger';

import { LogServiceAbstract } from '../interface/service/log.service.abstract';

@Injectable()
export class LogService extends LogServiceAbstract {
  constructor(private _ngxLogger: NGXLogger) {
    super();
  }

  // tslint:disable-next-line:no-any
  debug(message: any): void {
    this._ngxLogger.debug(message);
  }

  // tslint:disable-next-line:no-any
  error(message: any): void {
    this._ngxLogger.error(message);
  }

  // tslint:disable-next-line:no-any
  log(message: any): void {
    this._ngxLogger.log(message);
  }

  updateLoggerUri(logErrorUri: string): void {
    const updatedConfig: LoggerConfig = this._ngxLogger.getConfigSnapshot();
    updatedConfig.serverLoggingUrl = logErrorUri;

    this._ngxLogger.updateConfig(updatedConfig);
  }
}
