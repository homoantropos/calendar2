import { Component, ViewChild, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Event } from '../event.model';
import {DateProviderService} from '../../services/date-provider.service';
import {Schedule} from '../../schedule/schedule';

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
      startDay: new FormGroup({
        year: new FormControl('', Validators.required),
        month: new FormControl('', Validators.required),
        day: new FormControl('', Validators.required)}),
      finishDay: new FormGroup({
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
        valueF.town,
        Schedule.countId,
        valueF.country,
        valueF.region
      )
    );
    Schedule.countId = Schedule.countId++;
    this.eventCreatorForm.reset();
    this.elTitle.nativeElement.focus();
  }
}
