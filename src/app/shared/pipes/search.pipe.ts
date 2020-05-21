import {Pipe, PipeTransform} from '@angular/core';
import {Event} from '../../main-layout/components/event/event.model';

@Pipe({
  name: 'appSearch'
})

export class SearchPipe implements PipeTransform {
  transform(schedule: Event[], search = ''): Event[] {
    if (!search.trim()) {
      return schedule;
    }
    return schedule.filter(event => event.title.toLowerCase().includes(search.toLowerCase()));
  }

}
