import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigService } from '@ngx-config/core';

import { AuthLayoutComponent } from './auth.component';

let configServiceStub: jasmine.SpyObj<ConfigService>;

// tslint:disable-next-line:no-any
const testConfig: any = {
  auth: {
    heroImageUri: '/assets/img/hero.png',
  },
};

function createStubs(): void {
  configServiceStub = jasmine.createSpyObj('ConfigService', ['getSettings']);
  configServiceStub.getSettings.and.returnValue(testConfig);
}

describe('AuthLayoutComponent', () => {
  let component: AuthLayoutComponent;
  let fixture: ComponentFixture<AuthLayoutComponent>;

  beforeEach(async(() => {
    createStubs();

    TestBed.configureTestingModule({
      imports: [MatCardModule, RouterTestingModule],
      declarations: [AuthLayoutComponent],
      providers: [{ provide: ConfigService, useValue: configServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the correct hero image URI from config into the template', () => {
    const componentDe: DebugElement = fixture.debugElement;
    const heroImageDe: DebugElement = componentDe.query(
      By.css('.AuthLayout__hero-img')
    );
    const heroImageTag: HTMLImageElement = heroImageDe.nativeElement;

    const expectedUri: string = testConfig.auth.heroImageUri;

    expect(heroImageTag.src).toMatch(new RegExp(`${expectedUri}$`));
  });
});
