import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';
import { Observable, of } from 'rxjs';

import { AppComponent } from './app.component';

// tslint:disable-next-line:no-any
const translations: any = {
  siteTitle: 'testTitle',
  pages: {
    home: {
      welcomeMessage: 'testWelcome',
    },
  },
};

class TranslateLoaderStub implements TranslateLoader {
  // tslint:disable-next-line:no-any
  getTranslation(lang: string): Observable<any> {
    return of(translations);
  }
}

let angularticsStub: Angulartics2GoogleTagManager;

describe('AppComponent', () => {
  beforeEach(async(() => {
    angularticsStub = jasmine.createSpyObj('Angulartics2GoogleTagManager', [
      'pageTrack',
    ]);
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateLoaderStub,
          },
        }),
      ],
      providers: [
        { provide: Angulartics2GoogleTagManager, useValue: angularticsStub },
        Title,
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

  it(`should get title from translate service`, async(() => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(
      AppComponent
    );
    fixture.detectChanges();
    const app: AppComponent = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(translations.siteTitle);
  }));

  it('should render expected title tag', async(() => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(
      AppComponent
    );
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    const welcomeMessage: string = compiled.querySelector('.welcome-message')
      .textContent;
    expect(welcomeMessage).toContain(translations.pages.home.welcomeMessage);
    expect(welcomeMessage).toContain(translations.siteTitle);
  }));
});
