import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthLayoutComponent } from '../layout/component/auth/auth.component';
import { LoginPageComponent } from './component/login/login.component';
import { RegisterPageComponent } from './component/register/register.component';

const authRoutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
      },
      {
        path: 'register',
        component: RegisterPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
// tslint:disable-next-line:no-unnecessary-class
export class AuthRoutingModule {}
