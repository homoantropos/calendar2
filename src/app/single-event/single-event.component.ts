import { Component, Input, OnInit } from '@angular/core';
import { Event } from './event.model';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css']
})

export class SingleEventComponent implements OnInit {
@Input() event: Event;

  constructor() { }

  ngOnInit(): void {
  }

}
