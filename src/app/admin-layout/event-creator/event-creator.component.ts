import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Event } from '../../main-layout/components/event/event.model';
import {DateProviderService} from '../../shared/services/date-provider.service';
import {Schedule} from '../../main-layout/schedule/schedule';
import {EventsService} from '../../main-layout/components/event/events.service';
import {AlertService} from '../services/alert.service';

@Component({
  selector: 'app-event-creator',
  templateUrl: './event-creator.component.html',
  styleUrls: ['./event-creator.component.css']
})

export class EventCreatorComponent implements OnInit {
  eventCreatorForm: FormGroup;
  @ViewChild('titleInput') elTitle: ElementRef;
  isVisible = true;
  submitted = false;

  constructor(
    private dateProvider: DateProviderService,
    private eventService: EventsService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.eventCreatorForm = new FormGroup ({
      title: new FormControl('', Validators.required),
      startDay: new FormControl('', Validators.required),
      finishDay: new FormControl('', Validators.required),
      town: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      region: new FormControl('', Validators.required)
    });
  }
  createEvent(valueF: any) {
    if (this.eventCreatorForm.invalid) {
      return;
    }
    this.submitted = true;
    const event = (valueF as Event);
    event.duration = 1 + ((valueF.finishDay - valueF.startDay) / (1000 * 60 * 60 * 24));
    this.eventService.add(event).subscribe(() => {
      this.eventCreatorForm.reset();
      this.elTitle.nativeElement.focus();
      this.alertService.success('Захід успішно додано!');
      this.submitted = false;
    }, () => {
      this.submitted = false;
    });
  }
}
