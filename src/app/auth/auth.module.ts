import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './component/login/login.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoginComponent],
})
// tslint:disable-next-line:no-unnecessary-class
export class AuthModule {}
