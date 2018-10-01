import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { AppState } from '../../../app.state';
import { LogServiceAbstract } from '../../../core/interface/service/log.service.abstract';
import { Spork } from '../../model/spork.model';
import { SporkService } from '../../service/spork.service';
import * as SporkActions from '../../state/action/spork.actions';

@Component({
  selector: 'app-spork-list',
  templateUrl: './spork-list.component.html',
  styleUrls: ['./spork-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SporkListComponent implements OnInit {
  public sporks: Observable<Spork[]>;

  constructor(
    private _logger: LogServiceAbstract,
    private _sporkService: SporkService,
    private _toastr: ToastrService,
    private _store: Store<AppState>
  ) {}

  public ngOnInit(): void {
    this.sporks = this._store.select('spork');
    this._sporkService.getSporks().subscribe((sporks: Spork[]) => {
      this._store.dispatch(new SporkActions.SetSporks(sporks));
    }, this._errorHandler.bind(this));
  }

  protected _errorHandler(errorResponse: HttpErrorResponse): void {
    this._logger.devLog(errorResponse.error);
    this._toastr.error('There was a problem retrieving the sporks.');
  }
}
