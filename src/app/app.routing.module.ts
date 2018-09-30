import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './auth/component/login/login.component';
import { RegisterPageComponent } from './auth/component/register/register.component';
import { AuthGuard } from './core/service/guard/auth.guard';
import { AuthLayoutComponent } from './layout/component/auth/auth.component';
import { ErrorPageComponent } from './layout/component/error/error.component';

const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth/login',
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: '**',
    component: AuthLayoutComponent,
    children: [
      {
        path: '**',
        component: ErrorPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
// tslint:disable-next-line:no-unnecessary-class
export class AppRoutingModule {}
