import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '../event/event.model';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(calendar: Event [], search: string = '', field: string = 'title'): Event [] {
    if (!search.trim()) {
      return calendar;
    } else {
      return calendar.filter( event => {
        return event[field].toLowerCase().includes(search.toLowerCase());
      });
    }
  }

}
