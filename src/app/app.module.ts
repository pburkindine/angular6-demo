import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigLoader, ConfigModule, ConfigService } from '@ngx-config/core';
import { ConfigHttpLoader } from '@ngx-config/http-loader';
import {
  TranslateLoader,
  TranslateModule,
  TranslatePipe,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';
import { Ng2UiAuthModule } from 'ng2-ui-auth';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthConfig } from './config/auth.config';
import { LogServiceAbstract } from './interface/service/log.service.abstract';
import { RequestInspectorService } from './service/http/request-inspector.service';
import { AuthTokenInterceptor } from './service/interceptor/auth-token.interceptor.service';
import { JsonHeaderInterceptor } from './service/interceptor/json-header.interceptor.service';
import { LogRequestInterceptor } from './service/interceptor/log-request.interceptor.service';
import { LogResponseInterceptor } from './service/interceptor/log-response.interceptor.service';
import { TimingInterceptor } from './service/interceptor/timing.interceptor.service';
import { LogService } from './service/log.service';

export function configFactory(http: HttpClient): ConfigLoader {
  return new ConfigHttpLoader(http, './assets/config.json');
}

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/lang/', '.json');
}

@NgModule({
  imports: [
    Angulartics2Module.forRoot([Angulartics2GoogleTagManager]),
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ConfigModule.forRoot({
      provide: ConfigLoader,
      useFactory: configFactory,
      deps: [HttpClient],
    }),
    FormsModule,
    HttpClientModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR,
    }),
    Ng2UiAuthModule.forRoot(AuthConfig),
    ReactiveFormsModule,
    ToastrModule.forRoot({
      enableHtml: true,
      disableTimeOut: true,
      maxOpened: 2,
      onActivateTick: true,
      tapToDismiss: true,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [AppComponent],
  providers: [
    RequestInspectorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimingInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JsonHeaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogRequestInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogResponseInterceptor,
      multi: true,
    },

    ConfigService,
    TranslatePipe,

    {
      provide: LogServiceAbstract,
      useClass: LogService,
    },
  ],
  bootstrap: [AppComponent],
})
// tslint:disable-next-line:no-unnecessary-class
export class AppModule {}
