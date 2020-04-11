import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Schedule } from '../schedule';
import { Event } from '../../event/event.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit {

  isVisible = false;
  search = '';
  searchField = 'title';
  @ViewChild('filterInput') filterInputRef: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  get schedule(): Event[] {
    // @ts-ignore
    return Schedule.schedule.sort((a, b) => a.startDate - b.startDate);
  }
  addEvent(event: Event): void {
    Schedule.schedule.push(event);
    // @ts-ignore
    Schedule.schedule.sort((a, b) => a.startDate - b.startDate);
  }

  changeSearchField() {
    if (this.searchField === 'title') {
      this.searchField = 'start';
    } else {
      this.searchField = 'title';
    }
    this.filterInputRef.nativeElement.focus();
  }
}
