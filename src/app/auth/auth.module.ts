import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutModule } from '../layout/layout.module';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginPageComponent } from './component/login/login.component';
import { RegisterPageComponent } from './component/register/register.component';

@NgModule({
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPasswordStrengthModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
  ],
  declarations: [LoginPageComponent, RegisterPageComponent],
})
// tslint:disable-next-line:no-unnecessary-class
export class AuthModule {}
