import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title: string = 'Loading...';

  constructor(
    private _angulartics2GoogleTagManager: Angulartics2GoogleTagManager,
    private _titleService: Title,
    private _translateService: TranslateService
  ) {
    this._configureTranslation();
  }

  public ngOnInit(): void {
    this._consumeConfig();
  }

  protected _consumeConfig(): void {
    this._translateService.get('siteTitle').subscribe((siteTitle: string) => {
      this._titleService.setTitle(siteTitle);
      this.title = siteTitle;
    });
  }

  protected _configureTranslation(): void {
    this._translateService.setDefaultLang('en');
    this._translateService.use('en');
  }
}
