import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateProviderService {

  constructor() { }

  getDate(value: any): Date {
    return new Date(value.year, value.month, value.day);
  }

  getDuration(start: Date, end: Date): number {
    // @ts-ignore
    return (1 + (end - start) / (1000 * 24 * 60 * 60));
  }
}
