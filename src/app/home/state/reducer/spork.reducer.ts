import { Spork } from '../../model/spork.model';
import * as SporkActions from '../action/spork.actions';

export function reducer(
  state: Spork[] = [],
  action: SporkActions.Actions
): Spork[] {
  // tslint:disable-next-line:no-small-switch
  switch (action.type) {
    case SporkActions.SET_SPORKS:
      return action.payload;
    default:
      return state;
  }
}
