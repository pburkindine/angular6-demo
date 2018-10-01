import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { LogServiceAbstract } from '../../../core/interface/service/log.service.abstract';
import { Spork } from '../../model/spork.model';
import { SporkService } from '../../service/spork.service';

@Component({
  selector: 'app-spork-list',
  templateUrl: './spork-list.component.html',
  styleUrls: ['./spork-list.component.scss'],
})
export class SporkListComponent implements OnInit {
  public sporks: Spork[];

  constructor(
    private _logger: LogServiceAbstract,
    private _sporkService: SporkService,
    private _toastr: ToastrService
  ) {}

  public ngOnInit(): void {
    this._sporkService.getSporks().subscribe((sporks: Spork[]) => {
      this.sporks = sporks;
    }, this._errorHandler.bind(this));
  }

  protected _errorHandler(errorResponse: HttpErrorResponse): void {
    this._logger.devLog(errorResponse.error);
    this._toastr.error('There was a problem retrieving the sporks.');
  }
}
