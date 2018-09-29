import { environment } from '../../../environments/environment';

export abstract class LogServiceAbstract {
  public abstract debug(message: string): void;
  public abstract error(message: string): void;
  public abstract log(message: string): void;

  // tslint:disable-next-line:no-any
  public devLog(data: any): void {
    if (environment.production) {
      return;
    }

    // tslint:disable-next-line:no-console
    console.log(data);
  }
}
