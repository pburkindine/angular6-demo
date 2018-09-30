import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LogServiceAbstract } from '../../interface/service/log.service.abstract';
import { RequestInspectorService } from '../http/request-inspector.service';

@Injectable()
export class LogRequestInterceptor implements HttpInterceptor {
  public constructor(
    private _logger: LogServiceAbstract,
    private _requestInspector: RequestInspectorService
  ) {}

  // tslint:disable:no-any
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // tslint:enable:no-any

    if (this._requestInspector.isConfigFileRequest(req)) {
      return next.handle(req);
    }

    this._logger.devLog(req);

    return next.handle(req);
  }
}
