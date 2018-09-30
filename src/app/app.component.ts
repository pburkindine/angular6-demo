import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfigService } from '@ngx-config/core';
import { TranslateService } from '@ngx-translate/core';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';
import { LogServiceAbstract } from './core/interface/service/log.service.abstract';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private _angulartics2GoogleTagManager: Angulartics2GoogleTagManager,
    private _configService: ConfigService,
    private _logger: LogServiceAbstract,
    private _titleService: Title,
    private _translateService: TranslateService
  ) {
    this._configureTranslation();
  }

  public ngOnInit(): void {
    this._configure();
  }

  protected _configure(): void {
    this._translateService.get('siteTitle').subscribe((siteTitle: string) => {
      this._titleService.setTitle(siteTitle);
    });

    // tslint:disable-next-line:no-any
    const config: any = this._configService.getSettings();

    this._logger.updateLoggerUri(
      `${config.core.apiBaseUri}${config.logging.logErrorUri}`
    );
  }

  protected _configureTranslation(): void {
    this._translateService.setDefaultLang('en');
    this._translateService.use('en');
  }
}
