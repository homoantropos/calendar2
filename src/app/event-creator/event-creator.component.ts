import { Component, ViewChild, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Event } from '../single-event/event.model';

@Component({
  selector: 'app-event-creator',
  templateUrl: './event-creator.component.html',
  styleUrls: ['./event-creator.component.css']
})

export class EventCreatorComponent implements OnInit {

eventCreatorForm: FormGroup;
@ViewChild('titleInput') elTitle: ElementRef;
@Output() createdEvent: EventEmitter<Event>;
isVisible = true;

  constructor() {
	this.createdEvent = new EventEmitter<Event>();
	}

  ngOnInit(): void {
	this.eventCreatorForm = new FormGroup ({
		title: new FormControl('', Validators.required),
		start: new FormControl('', Validators.required),
		end: new FormControl('', Validators.required),
		days: new FormControl('', Validators.required),
		town: new FormControl('', Validators.required),
		country: new FormControl(''),
		region: new FormControl('')
	});
  }
  createEvent(value: any) {
	const event = (<Event> value);
	this.createdEvent.emit(event);
	this.eventCreatorForm.reset();
	this.elTitle.nativeElement.focus();
	}
}
