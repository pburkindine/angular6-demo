import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { LayoutModule } from '../layout/layout.module';
import { HomeComponent } from './component/home/home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  imports: [CommonModule, CoreModule, HomeRoutingModule, LayoutModule],
  declarations: [HomeComponent],
})
// tslint:disable-next-line:no-unnecessary-class
export class HomeModule {}
