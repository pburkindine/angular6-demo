import { ErrorHandler, Injectable } from '@angular/core';

import { LogServiceAbstract } from '../interface/service/log.service.abstract';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService implements ErrorHandler {
  constructor(private _logger: LogServiceAbstract) {}

  // tslint:disable-next-line:no-any
  handleError(error: any): void {
    this._logger.devLog(error);
    this._logger.error(error);
  }
}
