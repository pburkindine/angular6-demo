import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { LogServiceAbstract } from '../../interface/service/log.service.abstract';
import { RequestInspectorService } from '../http/request-inspector.service';

@Injectable()
export class LogResponseInterceptor implements HttpInterceptor {
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

    return next.handle(req).pipe(
      // tslint:disable-next-line:no-any
      tap((event: HttpEvent<any>) => {
        if (!(event instanceof HttpResponse)) {
          return;
        }

        this._logger.devLog(event);
      })
    );
  }
}
