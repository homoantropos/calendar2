import { Injectable } from '@angular/core';
import { Event } from './event.model';
import { Schedule } from '../../schedule/schedule';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {FbDbResponse} from '../../../shared/interfaces';

@Injectable({
  providedIn: 'root'
})

export class EventsService {

  constructor(private http: HttpClient) {}

  add(event: Event): Observable<Event> {
    return this.http.post(`${environment.fbDbUrl}/posts.json`, event)
      .pipe(map((response: FbDbResponse) => {
        return ({
          ...event,
          id: response.name
        } as Event);
      }));
  }

  getAll(): Observable<Event[]> {
    return this.http.get(`${environment.fbDbUrl}/posts.json`)
      .pipe(
        map(
          (response: {[key: string]: any}) => {
            return Object
              .keys(response)
              .map(key => ({
                  ...response[key],
                  id: key,
                startDay: new Date(response[key].startDay),
                finishDay: new Date(response[key].finishDay)
                }));
          }
        )
      );
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.fbDbUrl}/posts/${id}.json`);
  }

  update(event: Event): Observable<Event> {
    return this.http.patch<Event>(`${environment.fbDbUrl}/posts/${event.id}.json`, event);
  }

  getEventById(id: string): Event {
    return Schedule.schedule.find(e => e.id === id);
  }

  getEventDbBuId(id: string): Observable<Event> {
    return this.http.get(`${environment.fbDbUrl}/posts/${id}.json`)
      .pipe(
        map((event: Event) => {
          return {
            ...event, id,
            startDay: new Date(event.startDay),
            finishDay: new Date(event.finishDay)
          };
        })
      );
  }
}
