import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { BackToLoginComponent } from '../back-to-login/back-to-login.component';
import { ErrorPageComponent } from './error.component';

// tslint:disable-next-line:no-any
const translations: any = {
  nav: {
    errorPage: `I'll just put this over here with the rest of the fire.`,
  },
};

class TranslateLoaderStub implements TranslateLoader {
  // tslint:disable-next-line:no-any
  getTranslation(lang: string): Observable<any> {
    return of(translations);
  }
}

describe('ErrorPageComponent', () => {
  let component: ErrorPageComponent;
  let fixture: ComponentFixture<ErrorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateLoaderStub,
          },
        }),
      ],
      declarations: [BackToLoginComponent, ErrorPageComponent],
      providers: [TranslateService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPageComponent);
    component = fixture.componentInstance;

    TestBed.get(TranslateService).use('en');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct error string from the translation service', () => {
    const errorPageDe: DebugElement = fixture.debugElement;
    const messageDe: DebugElement = errorPageDe.query(
      By.css('.ErrorPage__message')
    );
    const message: HTMLHeadingElement = messageDe.nativeElement;

    const expectedValue: string = translations.nav.errorPage;

    expect(message.innerText).toMatch(new RegExp(`^${expectedValue}$`));
  });
});
