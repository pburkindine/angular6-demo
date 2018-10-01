import { HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ConfigService } from '@ngx-config/core';

@Injectable({ providedIn: 'root' })
export class RequestInspectorService {
  constructor(private _injector: Injector) {}

  // tslint:disable-next-line:no-any
  public isApiRequest(req: HttpRequest<any>): boolean {
    if (this.isConfigFileRequest(req)) {
      return false;
    }

    const configService: ConfigService = this._injector.get(ConfigService);

    if (!configService) {
      return false;
    }

    return req.url.indexOf(configService.getSettings().core.apiBaseUri) !== -1;
  }

  // tslint:disable-next-line:no-any
  public isConfigFileRequest(req: HttpRequest<any>): boolean {
    return req.url.endsWith('/assets/config.json');
  }
}
