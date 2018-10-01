import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '@ngx-config/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';

import { SporkPayload } from '../model/payload/spork.payload';
import { Spork } from '../model/spork.model';
import { SporkFactory } from './factory/spork.factory';

@Injectable({
  providedIn: 'root',
})
export class SporkService {
  private _getUri: string;

  constructor(
    private _configService: ConfigService,
    private _http: HttpClient,
    private _sporkFactory: SporkFactory
  ) {
    this._configure();
  }

  protected _configure(): void {
    // tslint:disable-next-line:no-any
    const config: any = this._configService.getSettings();

    this._getUri = `${config.core.apiBaseUri}${config.spork.getUri}`;
  }

  public getSporks(): Observable<Spork[]> {
    return this._http.get(this._getUri).pipe(map(this._getResult.bind(this)));
  }

  protected _getResult(resultPayload: SporkPayload[]): Spork[] {
    return this._sporkFactory.getFromPayload(resultPayload);
  }
}
