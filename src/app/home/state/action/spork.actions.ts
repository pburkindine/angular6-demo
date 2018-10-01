import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Spork } from '../../model/spork.model';

// tslint:disable-next-line:naming-convention
export const SET_SPORKS: string = '[SPORK] SetCollection';

@Injectable()
export class SetSporks implements Action {
  // tslint:disable-next-line:no-reserved-keywords
  readonly type: string = SET_SPORKS;

  constructor(public payload: Spork[]) {}
}

export type Actions = SetSporks;
