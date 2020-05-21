import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import {ActivatedRoute, Params} from '@angular/router';
import {EventsService} from '../events.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})

export class EventDetailsComponent implements OnInit {

  event: Event;

  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: Params) => {
        return this.eventsService.getEventDbBuId(params.get('id'));
      })
    ).subscribe((event: Event) => this.event = event);
  }

}
