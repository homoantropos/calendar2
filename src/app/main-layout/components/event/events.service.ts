import { Injectable } from '@angular/core';
import { Event } from './event.model';
import { Schedule } from '../../../schedule/schedule';

@Injectable()

export class EventsService {
  getEventById(id: number | string): Event {
    return Schedule.schedule.find(e => e.id === +id);
  }
}
