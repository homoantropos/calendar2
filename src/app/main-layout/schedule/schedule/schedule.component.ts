import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Schedule } from '../schedule';
import { Event } from '../../components/event/event.model';
import {Router} from '@angular/router';
import {AuthService} from '../../../admin-layout/auth-guard/auth.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit {

  search = '';
  searchField = 'title';
  @ViewChild('filterInput') filterInputRef: ElementRef;
  buttonName = 'Датою';
  placeHolderName = 'назвою...';

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }
  get schedule(): Event[] {
    // @ts-ignore
    return Schedule.schedule.sort((a, b) => a.startDay - b.startDay);
  }

  changeSearchField() {
    if (this.searchField === 'title') {
      this.searchField = 'startDay';
      this.buttonName = 'Назвою';
      this.placeHolderName = 'датою ...';
    } else {
      this.searchField = 'title';
      this.buttonName = 'Датою';
      this.placeHolderName = 'назвою...';
    }
    this.filterInputRef.nativeElement.focus();
  }

  renderEventDetails(event: Event) {
    this.router.navigateByUrl(`/schedule/${event.id}`);
  }
}
