import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { AuthLayoutComponent } from './component/auth/auth.component';
import { BackToLoginComponent } from './component/back-to-login/back-to-login.component';
import { ErrorPageComponent } from './component/error/error.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    TranslateModule,
  ],
  declarations: [AuthLayoutComponent, BackToLoginComponent, ErrorPageComponent],
})
// tslint:disable-next-line:no-unnecessary-class
export class LayoutModule {}
