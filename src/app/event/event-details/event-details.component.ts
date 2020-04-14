import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import {EventService} from '../event.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})

export class EventDetailsComponent implements OnInit {

  event: Event;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.event = this.eventService.getEventById(this.route.params.subscribe((param: Params) => (+param.id)));
  }

}
