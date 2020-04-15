import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import {ActivatedRoute, Params} from '@angular/router';
import {EventsService} from '../events.service';

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
    this.route.params.subscribe((params: Params) => this.event = this.eventsService.getEventById(params.id));
  }

}
