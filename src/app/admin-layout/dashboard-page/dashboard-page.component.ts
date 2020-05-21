import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth-guard/auth.service';
import {EventsService} from '../../main-layout/components/event/events.service';
import {Event} from '../../main-layout/components/event/event.model';
import {Subscription} from 'rxjs';
import {Schedule} from '../../main-layout/schedule/schedule';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  dSub: Subscription;
  search: '';

  constructor(
    private auth: AuthService,
    private eventsServise: EventsService
  ) { }

  ngOnInit(): void {}

  ngOnDestroy() {
    if (this.dSub) {
      this.dSub.unsubscribe();
    }
  }

  remove(id: string) {
    this.dSub = this.eventsServise.remove(id).subscribe(() => {
      Schedule.schedule = Schedule.schedule.filter(event => event.id !== id);
    });
  }

  get schedule(): Event[] {
    // @ts-ignore
    return Schedule.schedule;
  }
}
