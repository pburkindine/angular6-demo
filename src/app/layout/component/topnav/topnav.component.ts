import { Component, OnInit } from '@angular/core';

import { LogoutService } from '../../../core/service/auth/logout.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
})
export class TopnavComponent implements OnInit {
  constructor(private _logoutService: LogoutService) {}

  public ngOnInit(): void {}

  public logout(): void {
    this._logoutService.logout();
  }
}
