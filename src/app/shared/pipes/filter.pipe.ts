import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '../../event/event.model';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(schedule: Event [], search: string = '', field: string = 'title'): Event [] {
    if (!search.trim()) {
      return schedule;
    } else {
      if (field === 'title') {
      return schedule.filter( event => {
        return event.title.toLowerCase().includes(search.toLowerCase());
      });
      } else {
        return schedule.filter( event => {
          return event.startDay.getMonth().toString().includes(search);
        });
      }
    }
  }

}
