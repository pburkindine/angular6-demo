import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigService } from '@ngx-config/core';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';
import { Observable, of } from 'rxjs';

import { AppComponent } from './app.component';
import { LogServiceAbstract } from './core/interface/service/log.service.abstract';
import Spy = jasmine.Spy;

// tslint:disable-next-line:no-any
const translations: any = {
  siteTitle: 'testTitle',
  pages: {
    home: {
      welcomeMessage: 'testWelcome',
    },
  },
};

// tslint:disable-next-line:no-any
const testConfig: any = {
  core: {
    apiBaseUri: 'https://www.test.com/api',
  },
  logging: {
    logErrorUri: '/log/error',
  },
};

class TranslateLoaderStub implements TranslateLoader {
  // tslint:disable-next-line:no-any
  getTranslation(lang: string): Observable<any> {
    return of(translations);
  }
}

let angularticsStub: jasmine.SpyObj<Angulartics2GoogleTagManager>;
let configServiceStub: jasmine.SpyObj<ConfigService>;
let logServiceStub: jasmine.SpyObj<LogServiceAbstract>;
let titleServiceStub: jasmine.SpyObj<Title>;

function createStubs(): void {
  angularticsStub = jasmine.createSpyObj('Angulartics2GoogleTagManager', [
    'pageTrack',
  ]);
  configServiceStub = jasmine.createSpyObj('ConfigService', ['getSettings']);
  configServiceStub.getSettings.and.returnValue(testConfig);
  logServiceStub = jasmine.createSpyObj('LogService', ['updateLoggerUri']);
  titleServiceStub = jasmine.createSpyObj('Title', ['setTitle']);
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    createStubs();

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateLoaderStub,
          },
        }),
      ],
      providers: [
        { provide: ConfigService, useValue: configServiceStub },
        { provide: Angulartics2GoogleTagManager, useValue: angularticsStub },
        { provide: LogServiceAbstract, useValue: logServiceStub },
        { provide: Title, useValue: titleServiceStub },
        TranslateService,
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(
      AppComponent
    );
    const app: AppComponent = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should set page title from translate service`, async(() => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(
      AppComponent
    );
    fixture.detectChanges();
    expect(titleServiceStub.setTitle.calls.count()).toEqual(1);
    expect(titleServiceStub.setTitle.calls.argsFor(0)).toEqual([
      translations.siteTitle,
    ]);
  }));

  it('should update the logger URI', async(() => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(
      AppComponent
    );
    fixture.detectChanges();
    const expectedUri: string = `${testConfig.core.apiBaseUri}${
      testConfig.logging.logErrorUri
    }`;
    expect(logServiceStub.updateLoggerUri.calls.count()).toEqual(1);
    expect(logServiceStub.updateLoggerUri.calls.argsFor(0)).toEqual([
      expectedUri,
    ]);
  }));

  it('should set the default language to English', async(() => {
    const translateService: TranslateService = TestBed.get(TranslateService);
    const translateUse: Spy = spyOn(translateService, 'use');
    const translateSetDefaultLang: Spy = spyOn(
      translateService,
      'setDefaultLang'
    );

    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(
      AppComponent
    );
    fixture.detectChanges();

    const expectedLanguage: string = 'en';

    expect(translateUse.calls.count()).toEqual(1);
    expect(translateUse.calls.argsFor(0)).toEqual([expectedLanguage]);

    expect(translateSetDefaultLang.calls.count()).toEqual(1);
    expect(translateSetDefaultLang.calls.argsFor(0)).toEqual([
      expectedLanguage,
    ]);
  }));
});
