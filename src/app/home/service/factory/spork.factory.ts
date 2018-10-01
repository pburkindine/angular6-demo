import { Injectable } from '@angular/core';
import * as Money from 'js-money';

import { SporkPayload } from '../../model/payload/spork.payload';
import { Spork } from '../../model/spork.model';

@Injectable({
  providedIn: 'root',
})
export class SporkFactory {
  constructor() {}

  public getFromPayload(sporksPayload: SporkPayload[]): Spork[] {
    const sporks: Spork[] = [];

    for (const sporkPayload of sporksPayload) {
      sporks.push(
        this.getSpork(
          Money.fromDecimal(sporkPayload.price, 'USD'),
          sporkPayload.imageUri
        )
      );
    }

    return sporks;
  }

  public getSpork(price: Money, imageUri: string): Spork {
    return new Spork(price, imageUri);
  }
}
