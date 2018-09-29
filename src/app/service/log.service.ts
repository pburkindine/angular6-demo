import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

import { LogServiceAbstract } from '../interface/service/log.service.abstract';

@Injectable()
export class LogService extends LogServiceAbstract {
  constructor(private _ngxLogger: NGXLogger) {
    super();
  }

  debug(message: string): void {
    this._ngxLogger.debug(message);
  }

  error(message: string): void {
    this._ngxLogger.error(message);
  }

  log(message: string): void {
    this._ngxLogger.log(message);
  }
}
