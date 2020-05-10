import { Component, ViewChild, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Event } from '../../main-layout/components/event/event.model';
import {DateProviderService} from '../../shared/services/date-provider.service';
import {Schedule} from '../../main-layout/schedule/schedule';

@Component({
  selector: 'app-event-creator',
  templateUrl: './event-creator.component.html',
  styleUrls: ['./event-creator.component.css']
})

export class EventCreatorComponent implements OnInit {

eventCreatorForm: FormGroup;
@ViewChild('titleInput') elTitle: ElementRef;
isVisible = true;

  constructor(private dateProvider: DateProviderService) { }

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
    const event = new Event (
        valueF.title,
        this.dateProvider.dateProvide(valueF.startDay),
        this.dateProvider.dateProvide(valueF.finishDay),
        valueF.town,
        Schedule.countId,
        valueF.country,
        valueF.region
      );
    Schedule.schedule.push(event);
    Schedule.countId = Schedule.countId++;
    // @ts-ignore
    Schedule.schedule.sort((a, b) => a.startDay - b.startDay);
    this.eventCreatorForm.reset();
    this.elTitle.nativeElement.focus();
  }
}
