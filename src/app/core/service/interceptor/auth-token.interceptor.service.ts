import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AuthService } from 'ng2-ui-auth';
import { Observable } from 'rxjs';
import { RequestInspectorService } from '../http/request-inspector.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  public constructor(
    private _injector: Injector,
    private _requestInspector: RequestInspectorService
  ) {}

  // tslint:disable:no-any
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // tslint:enable:no-any
    if (!this._requestInspector.isApiRequest(req)) {
      // TODO this is a shim around the behavior of the AuthService, which tries to modify and inject this header
      // tslint:disable-next-line:no-any
      const cleanReq: HttpRequest<any> = req.clone({
        setHeaders: { Authorization: '' },
      });

      return next.handle(cleanReq);
    }

    const authService: AuthService = this._injector.get<AuthService>(
      AuthService
    );
    const token: string = authService.getToken();
    if (!token) {
      return next.handle(req);
    }

    // tslint:disable-next-line:no-any
    const authReq: HttpRequest<any> = req.clone({
      setHeaders: { Authorization: token },
    });

    return next.handle(authReq);
  }
}
