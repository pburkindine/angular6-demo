import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-switch',
  templateUrl: './lang-switch.component.html',
  styleUrls: ['./lang-switch.component.scss'],
})
export class LangSwitchComponent implements OnInit {
  constructor(private _translateService: TranslateService) {}

  public ngOnInit(): void {}

  public setLang(lang: string): void {
    this._translateService.use(lang);
  }
}
