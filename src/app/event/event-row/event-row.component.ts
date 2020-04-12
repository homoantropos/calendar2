import { Component, Input } from '@angular/core';
import { Event } from '../event.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-row',
  templateUrl: './event-row.component.html',
  styleUrls: ['./event-row.component.css']
})

export class EventRowComponent {

  @Input() event: Event;

}
