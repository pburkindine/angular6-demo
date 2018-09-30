import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LangSwitchComponent } from './component/lang-switch/lang-switch.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LangSwitchComponent],
  exports: [LangSwitchComponent],
})
// tslint:disable-next-line:no-unnecessary-class
export class CoreModule {}
