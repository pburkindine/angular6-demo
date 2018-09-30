import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RequestInspectorService {
  // tslint:disable-next-line:no-any
  public isConfigFileRequest(req: HttpRequest<any>): boolean {
    return req.url.endsWith('/assets/config.json');
  }
}
