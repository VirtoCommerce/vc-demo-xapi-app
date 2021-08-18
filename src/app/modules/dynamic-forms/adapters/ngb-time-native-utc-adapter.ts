import { Injectable } from '@angular/core';
import { NgbTimeAdapter, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { isInteger } from 'src/app/helpers/isInteger';

@Injectable()
export class NgbTimeNativeUTCAdapter extends NgbTimeAdapter<Date> {
  fromModel(date: Date | null): NgbTimeStruct | null {
    return (date instanceof Date && !isNaN(date.getTime())) ? this._fromNativeDate(date) : null;
  }

  toModel(date: NgbTimeStruct | null): Date | null {
    return date && isInteger(date.hour) && isInteger(date.minute) && isInteger(date.second)
      ? this._toNativeDate(date)
      : null;
  }

  protected _fromNativeDate(date: Date): NgbTimeStruct {
    return {
      hour: date.getUTCHours(),
      minute: date.getUTCMinutes(),
      second: date.getUTCSeconds(),
    };
  }

  protected _toNativeDate(date: NgbTimeStruct): Date {
    const today = new Date();
    return new Date(Date.UTC(
      today.getUTCFullYear(),
      today.getUTCMonth() - 1,
      today.getUTCDay(),
      date.hour,
      date.minute,
      date.second
    ));
  }
}
