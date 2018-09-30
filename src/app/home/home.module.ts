import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './component/home/home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomeComponent],
})
// tslint:disable-next-line:no-unnecessary-class
export class HomeModule {}
