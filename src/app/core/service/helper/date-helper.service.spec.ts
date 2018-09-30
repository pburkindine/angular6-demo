import { TestBed } from '@angular/core/testing';
import { DateHelperService } from './date-helper.service';

describe('DateHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const service: DateHelperService = TestBed.get(DateHelperService);
    expect(service).toBeTruthy();
  });

  it('should return the correct date when passed a UTC string', () => {
    const service: DateHelperService = TestBed.get(DateHelperService);

    const inputValue: string = '2018-09-30T18:55:18.747Z';

    const result: Date = service.getDateFromUtcString(inputValue);
    const humanMonthOffset: number = 1;

    expect(result.getFullYear()).toBe(2018);
    expect(result.getMonth() + humanMonthOffset).toBe(9);
    expect(result.getDate()).toBe(30);
    expect(result.getUTCHours()).toBe(18);
    expect(result.getUTCMinutes()).toBe(55);
    expect(result.getUTCSeconds()).toBe(18);
  });

  it('should throw an error if UTC string is invalid', () => {
    const service: DateHelperService = TestBed.get(DateHelperService);

    const inputValue: string = 'Invalid input';

    expect(service.getDateFromUtcString.bind(service, inputValue)).toThrow();
  });
});
