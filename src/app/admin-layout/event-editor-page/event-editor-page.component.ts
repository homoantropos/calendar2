import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventsService} from '../../main-layout/components/event/events.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {Event} from '../../main-layout/components/event/event.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-event-page',
  templateUrl: './event-editor-page.component.html',
  styleUrls: ['./event-editor-page.component.css']
})
export class EventEditorPageComponent implements OnInit, OnDestroy {

  eventEditorform: FormGroup;
  event: Event;
  submitted = false;
  uSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap( (params: Params) => {
          return this.eventsService.getEventDbBuId(params.get('id'));
        })
    ).subscribe((event: Event) => {
        this.event = event;
        this.eventEditorform = new FormGroup({
          title: new FormControl(event.title, Validators.required),
          startDay: new FormControl(event.startDay, Validators.required),
          finishDay: new FormControl(event.finishDay, Validators.required),
          town: new FormControl(event.town, Validators.required),
          country: new FormControl(event.country),
          region: new FormControl(event.region)
        });
      }
    );
  }

  editeEvent(value: any) {
    if (!value) {
      return;
    } else {
      this.submitted = true;
      const ev = (value as Event);
      ev.duration = 1 + ((value.finishDay - value.startDay) / (1000 * 60 * 60 * 24));
      ev.id = this.event.id;
      this.uSub = this.eventsService.update(ev).pipe(
        map (
          (event: Event) => {
            return {
              ...event
            };
          }
          )
      ).subscribe(() => {
      this.submitted = false;
    });
    }
  }

  ngOnDestroy() {
    if (this.uSub) {
      this.uSub.unsubscribe();
    }
  }
}
