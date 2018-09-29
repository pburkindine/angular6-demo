import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class JsonHeaderInterceptor implements HttpInterceptor {
  private _jsonEncodeVerbs: string[] = ['POST', 'PUT'];

  public constructor() {}

  // tslint:disable:no-any
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // tslint:enable:no-any

    // tslint:disable-next-line:no-any
    const headers: any = {
      Accept: 'application/json',
    };

    if (this._jsonEncodeVerbs.includes(req.method.toUpperCase())) {
      headers['Content-Type'] = 'application/json; charset=utf-8';
    }

    // tslint:disable-next-line:no-any
    const authReq: HttpRequest<any> = req.clone({
      setHeaders: headers,
    });

    return next.handle(authReq);
  }
}
