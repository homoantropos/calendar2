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
      start: new FormGroup({
        year: new FormControl('', Validators.required),
        month: new FormControl('', Validators.required),
        day: new FormControl('', Validators.required)}),
      end: new FormGroup({
        year: new FormControl('', Validators.required),
        month: new FormControl('', Validators.required),
        day: new FormControl('', Validators.required)}),
      town: new FormControl('', Validators.required),
      country: new FormControl(''),
      region: new FormControl('')
    });
  }
  createEvent() {
    const start: Date = new Date(
      this.eventCreatorForm.get('start').get('year').value,
      this.eventCreatorForm.get('start').get('month').value,
      this.eventCreatorForm.get('start').get('day').value);
    const end: Date = new Date(
      this.eventCreatorForm.get('end').get('year').value,
      this.eventCreatorForm.get('end').get('month').value,
      this.eventCreatorForm.get('end').get('day').value);
    // @ts-ignore
    const days: number = 1 + (end - start) / (1000 * 24 * 60 * 60);
    const event = new Event (
      this.eventCreatorForm.get('title').value,
      start,
      end,
      days,
      this.eventCreatorForm.get('town').value,
      this.eventCreatorForm.get('country').value,
      this.eventCreatorForm.get('region').value);
    this.createdEvent.emit(event);
    this.eventCreatorForm.reset();
    this.elTitle.nativeElement.focus();
  }
}
