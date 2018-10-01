import * as Money from 'js-money';

export class Spork {
  private readonly _price: Money;
  private readonly _imageUri: string;

  constructor(price: Money, imageUri: string) {
    this._price = price;
    this._imageUri = imageUri;
  }

  get price(): Money {
    return this._price;
  }

  get imageUri(): string {
    return this._imageUri;
  }
}
