import { Component, ViewChild, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Event } from '../event.model';
import {DateProviderService} from '../../services/date-provider.service';

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
  createEvent(valueF: any) {
    this.createdEvent.emit(
      new Event (
        valueF.title,
        this.dateCTR.getDate(valueF.start),
        this.dateCTR.getDate(valueF.end),
        this.dateCTR.getDuration(
          this.dateCTR.getDate(valueF.start),
          this.dateCTR.getDate(valueF.end)
        ),
        valueF.town,
        valueF.country,
        valueF.region
      )
    );
    this.eventCreatorForm.reset();
    this.elTitle.nativeElement.focus();
  }
}
