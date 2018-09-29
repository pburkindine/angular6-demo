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
export class TimingInterceptor implements HttpInterceptor {
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

    const started: number = Date.now();

    return next.handle(req).pipe(
      // tslint:disable-next-line:no-any
      tap((event: HttpEvent<any>) => {
        if (!(event instanceof HttpResponse)) {
          return;
        }

        const elapsed: number = Date.now() - started;
        this._logger.devLog(
          `Request for ${req.urlWithParams} took ${elapsed} ms.`
        );
      })
    );
  }
}
