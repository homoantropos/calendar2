import { Injectable } from '@angular/core';

import { Schedule } from '../schedule/schedule';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEventById(id: number | string): Event {
    return Schedule.schedule.find(e => e.id === +id);
  }
}
