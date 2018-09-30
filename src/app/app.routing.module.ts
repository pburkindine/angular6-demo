import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/component/login/login.component';
import { AuthGuard } from './core/service/guard/auth.guard';
import { AuthLayoutComponent } from './layout/component/auth/auth.component';
import { ErrorPageComponent } from './layout/component/error/error.component';

const appRoutes: Routes = [
  {
    path: 'auth/login',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
    ],
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [{ path: 'main', loadChildren: './home/home.module#HomeModule' }],
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
