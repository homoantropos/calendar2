import { Component, ViewChild, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Event } from '../single-event/event.model';
import {DateProviderService} from '../services/date-provider.service';

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

  constructor(private dateCTR: DateProviderService) {
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
    this.createdEvent.emit(
      new Event (
        this.eventCreatorForm.get('title').value,
        this.dateCTR.getDate(this.eventCreatorForm.value.start),
        this.dateCTR.getDate(this.eventCreatorForm.value.end),
        this.dateCTR.getDuration(
          this.dateCTR.getDate(this.eventCreatorForm.value.start),
          this.dateCTR.getDate(this.eventCreatorForm.value.end)),
      this.eventCreatorForm.get('town').value,
      this.eventCreatorForm.get('country').value,
      this.eventCreatorForm.get('region').value));
    this.eventCreatorForm.reset();
    this.elTitle.nativeElement.focus();
  }
}
