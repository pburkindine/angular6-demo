import { Component, OnInit } from '@angular/core';
import { ConfigService } from '@ngx-config/core';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthLayoutComponent implements OnInit {
  public heroImageUri: string;

  constructor(private _configService: ConfigService) {
    this._configure();
  }

  protected _configure(): void {
    // tslint:disable-next-line:no-any
    const config: any = this._configService.getSettings();

    this.heroImageUri = `${config.auth.heroImageUri}`;
  }

  ngOnInit(): void {}
}
