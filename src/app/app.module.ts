import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
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
import { CoreModule } from './core/core.module';
import { LogServiceAbstract } from './core/interface/service/log.service.abstract';
import { AuthTokenInterceptor } from './core/service/interceptor/auth-token.interceptor.service';
import { JsonHeaderInterceptor } from './core/service/interceptor/json-header.interceptor.service';
import { LogRequestInterceptor } from './core/service/interceptor/log-request.interceptor.service';
import { LogResponseInterceptor } from './core/service/interceptor/log-response.interceptor.service';
import { TimingInterceptor } from './core/service/interceptor/timing.interceptor.service';
import { LogService } from './core/service/log.service';
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './auth/auth.module';
import { environment } from '../environments/environment';
import { ErrorHandlerService } from './core/service/error-handler.service';

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
    AuthModule,
    BrowserAnimationsModule,
    BrowserModule,
    ConfigModule.forRoot({
      provide: ConfigLoader,
      useFactory: configFactory,
      deps: [HttpClient],
    }),
    CoreModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    LoggerModule.forRoot({
      level: environment.production ? NgxLoggerLevel.OFF : NgxLoggerLevel.TRACE,
      serverLogLevel: NgxLoggerLevel.ERROR,
    }),
    Ng2UiAuthModule.forRoot(AuthConfig),
    ReactiveFormsModule,
    RouterModule,
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

    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService,
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
