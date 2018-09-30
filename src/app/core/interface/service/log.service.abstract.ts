import { environment } from '../../../../environments/environment';

export abstract class LogServiceAbstract {
  // tslint:disable:no-any
  public abstract debug(message: any): void;
  public abstract error(message: any): void;
  public abstract log(message: any): void;
  // tslint:enable:no-any

  public abstract updateLoggerUri(apiBaseUri: string): void;

  // tslint:disable-next-line:no-any
  public devLog(data: any): void {
    if (environment.production) {
      return;
    }

    // tslint:disable-next-line:no-console
    console.log(data);
  }
}
