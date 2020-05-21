import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventsService} from './main-layout/components/event/events.service';
import {Schedule} from './main-layout/schedule/schedule';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {

  title = 'calendar2';
  pSub: Subscription;

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.pSub = this.eventsService.getAll().subscribe((schedule) => {
      Schedule.schedule = schedule;
      // @ts-ignore
      Schedule.schedule.sort((a, b) => a.startDay - b.startDay);
    });
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
    Schedule.schedule = null;
  }
}
