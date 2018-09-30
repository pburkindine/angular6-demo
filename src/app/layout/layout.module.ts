import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '../core/core.module';
import { AuthLayoutComponent } from './component/auth/auth.component';
import { BackToLoginComponent } from './component/back-to-login/back-to-login.component';
import { ErrorPageComponent } from './component/error/error.component';
import { MainLayoutComponent } from './component/main/main.component';
import { TopnavComponent } from './component/topnav/topnav.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    TranslateModule,
  ],
  declarations: [
    AuthLayoutComponent,
    BackToLoginComponent,
    ErrorPageComponent,
    MainLayoutComponent,
    TopnavComponent,
  ],
})
// tslint:disable-next-line:no-unnecessary-class
export class LayoutModule {}
