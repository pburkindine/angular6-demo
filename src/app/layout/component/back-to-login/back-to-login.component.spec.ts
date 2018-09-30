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

import { BackToLoginComponent } from './back-to-login.component';

// tslint:disable-next-line:no-any
const translations: any = {
  nav: {
    backToLogin: 'Back to Login Page',
  },
};

class TranslateLoaderStub implements TranslateLoader {
  // tslint:disable-next-line:no-any
  getTranslation(lang: string): Observable<any> {
    return of(translations);
  }
}

describe('BackToLoginComponent', () => {
  let component: BackToLoginComponent;
  let fixture: ComponentFixture<BackToLoginComponent>;

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
      declarations: [BackToLoginComponent],
      providers: [TranslateService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToLoginComponent);
    component = fixture.componentInstance;

    TestBed.get(TranslateService).use('en');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct Back to Login string from the translation service', () => {
    const backToLoginDe: DebugElement = fixture.debugElement;
    const innerWrapperDe: DebugElement = backToLoginDe.query(
      By.css('.BackToLogin__inner-wrapper')
    );
    const innerWrapper: HTMLDivElement = innerWrapperDe.nativeElement;

    const expectedValue: string = translations.nav.backToLogin;

    expect(innerWrapper.innerText).toMatch(new RegExp(`${expectedValue}$`));
  });
});
