import { DebugElement, Directive } from '@angular/core';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { AuthService } from 'ng2-ui-auth';
import { ToastrService } from 'ngx-toastr';
import { Observable, of, throwError } from 'rxjs';

import { LogServiceAbstract } from '../../../core/interface/service/log.service.abstract';
import { LoginFormFactory } from '../../service/factory/form/login.form.factory';
import { LoginService } from '../../service/login.service';
import { LoginPageComponent } from './login.component';

// tslint:disable-next-line:no-any
const translations: any = {
  pages: {
    login: {
      title: 'Login Page',
    },
  },
};

class TranslateLoaderStub implements TranslateLoader {
  // tslint:disable-next-line:no-any
  getTranslation(lang: string): Observable<any> {
    return of(translations);
  }
}

let authServiceStub: jasmine.SpyObj<AuthService>;
let loginFormFactoryStub: jasmine.SpyObj<LoginFormFactory>;
let loginServiceStub: jasmine.SpyObj<LoginService>;
let logServiceStub: jasmine.SpyObj<LogServiceAbstract>;
let routerStub: jasmine.SpyObj<Router>;
let toastrStub: jasmine.SpyObj<ToastrService>;

function createStubs(): void {
  authServiceStub = jasmine.createSpyObj('AuthService', ['logout']);
  loginFormFactoryStub = jasmine.createSpyObj('LoginFormFactory', ['getForm']);
  loginFormFactoryStub.getForm.and.returnValue(
    new FormGroup({ email: new FormControl(), password: new FormControl() })
  );
  loginServiceStub = jasmine.createSpyObj('LoginService', ['login']);
  logServiceStub = jasmine.createSpyObj('LogService', ['devLog']);
  routerStub = jasmine.createSpyObj('Router', ['navigate']);
  toastrStub = jasmine.createSpyObj('ToastrService', ['error', 'success']);
}

function setPositiveLoginResult(): void {
  loginServiceStub.login.and.returnValue(of(null));
}

function setNegativeLoginResult(expectedError: string = 'error msg'): void {
  loginServiceStub.login.and.callFake(() => throwError({ msg: expectedError }));
}

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async(() => {
    createStubs();

    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateLoaderStub,
          },
        }),
      ],
      declarations: [LoginPageComponent],
      providers: [
        {
          provide: AuthService,
          useValue: authServiceStub,
        },
        {
          provide: LoginFormFactory,
          useValue: loginFormFactoryStub,
        },
        {
          provide: LoginService,
          useValue: loginServiceStub,
        },
        {
          provide: LogServiceAbstract,
          useValue: logServiceStub,
        },
        { provide: Router, useValue: routerStub },
        {
          provide: ToastrService,
          useValue: toastrStub,
        },
        TranslateService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;

    TestBed.get(TranslateService).use('en');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should instruct the auth service to logout', () => {
    expect(authServiceStub.logout.calls.count()).toBe(1);
  });

  it('should generate the form on initialization', () => {
    expect(component.form).toBeTruthy();
  });

  it('should set the page title from the translations', () => {
    const loginPageDe: DebugElement = fixture.debugElement;
    const cardTitleDe: DebugElement = loginPageDe.query(
      By.css('.LoginPage__title')
    );
    const cardTitle: HTMLElement = cardTitleDe.nativeElement;

    const expectedValue: string = translations.pages.login.title;

    expect(cardTitle.innerText).toBe(expectedValue);
  });

  it('should show a success alert on successful login', fakeAsync(() => {
    setPositiveLoginResult();

    component.login();
    expect(toastrStub.success.calls.count()).toBe(1);
  }));

  it('should navigate to home page on successful login', fakeAsync(() => {
    setPositiveLoginResult();

    component.login();
    expect(routerStub.navigate.calls.count()).toBe(1);
    expect(routerStub.navigate.calls.argsFor(0)).toEqual([['home']]);
  }));

  it('should show an error alert on failed login', fakeAsync(() => {
    setNegativeLoginResult();

    component.login();
    expect(toastrStub.error.calls.count()).toBe(1);
  }));
});
