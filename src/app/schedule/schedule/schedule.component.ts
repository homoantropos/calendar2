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
  buttonName = 'Датою';
  constructor() { }

  ngOnInit(): void {
  }
  get schedule(): Event[] {
    // @ts-ignore
    return Schedule.schedule.sort((a, b) => a.startDay - b.startDay);
  }
  addEvent(event: Event): void {
    Schedule.schedule.push(event);
    // @ts-ignore
    Schedule.schedule.sort((a, b) => a.startDay - b.startDay);
  }

  changeSearchField() {

    if (this.searchField === 'title') {
      this.searchField = 'startDay';
      this.buttonName = 'Назвою';
    } else {
      this.searchField = 'title';
      this.buttonName = 'Датою';
    }
    this.filterInputRef.nativeElement.focus();
  }
}
