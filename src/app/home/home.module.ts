import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';

import { CoreModule } from '../core/core.module';
import { LayoutModule } from '../layout/layout.module';
import { HomeComponent } from './component/home/home.component';
import { SporkListComponent } from './component/spork-list/spork-list.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    HomeRoutingModule,
    LayoutModule,
    MatCardModule,
  ],
  declarations: [HomeComponent, SporkListComponent],
})
// tslint:disable-next-line:no-unnecessary-class
export class HomeModule {}
