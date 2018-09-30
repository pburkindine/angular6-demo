import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class DateHelperService {
  public getDateFromUtcString(utcDateString: string): Date {
    const date: Date = moment(utcDateString, 'YYYY-MM-DDTHH:mm:ssZa').toDate();

    if (isNaN(date.getTime())) {
      throw new Error(`Provided date string is not in expected UTC format`);
    }

    return date;
  }
}
