import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Event } from '../../components/event/event.model';
import {Router} from '@angular/router';
import {AuthService} from '../../../admin-layout/auth-guard/auth.service';
import {Subscription} from 'rxjs';
import {EventsService} from '../../components/event/events.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit, OnDestroy {

  search = '';
  searchField = 'title';
  @ViewChild('filterInput') filterInputRef: ElementRef;
  buttonName = 'Датою';
  placeHolderName = 'назвою...';
  list: Event[];
  pSub: Subscription;
  buttonArrow = '&#8645';
  sortDirection = true;

  constructor(
    private router: Router,
    public auth: AuthService,
    public eventsService: EventsService
  ) { }

  ngOnInit() {
    this.pSub = this.eventsService.getAll().subscribe((schedule) => {
      this.list = schedule;
      // @ts-ignore
      this.list.sort((a, b) => a.startDay - b.startDay);
  });
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

  sortByTitle() {
    if (this.sortDirection) {
      this.list = this.list.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
      this.sortDirection = false;
      this.buttonArrow = '&#11163';
    } else {
      this.list = this.list.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
      this.list = this.list.reverse();
      this.sortDirection = true;
      this.buttonArrow = '&#11161';
    }
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }

  sortByStartDay() {
    if (this.sortDirection) {
      // @ts-ignore
      this.list = this.list.sort((a, b) => a.startDay - b.startDay);
      this.sortDirection = false;
      this.buttonArrow = '&#11163';
    } else {
      // @ts-ignore
      this.list = this.list.sort((a, b) => a.startDay - b.startDay);
      this.list = this.list.reverse();
      this.sortDirection = true;
      this.buttonArrow = '&#11161';
    }
  }

  sortByFinishDay() {
    if (this.sortDirection) {
      // @ts-ignore
      this.list = this.list.sort((a, b) => a.finishDay - b.finishDay);
      this.sortDirection = false;
      this.buttonArrow = '&#11163';
    } else {
      // @ts-ignore
      this.list = this.list.sort((a, b) => a.finishDay - b.finishDay);
      this.list = this.list.reverse();
      this.sortDirection = true;
      this.buttonArrow = '&#11161';
    }
  }

  sortByDuration() {
    if (this.sortDirection) {
      this.list = this.list.sort((a, b) => a.duration - b.duration);
      this.sortDirection = false;
      this.buttonArrow = '&#111633';
    } else {
      this.list = this.list.sort((a, b) => a.duration - b.duration);
      this.list = this.list.reverse();
      this.sortDirection = true;
      this.buttonArrow = '&#11161';
    }
  }

  sortByCountry() {
    if (this.sortDirection) {
      this.list = this.list.sort((a, b) =>
        a.country.toLowerCase().localeCompare(b.country.toLowerCase()));
      this.sortDirection = false;
      this.buttonArrow = '&#11163';
    } else {
      this.list = this.list.sort((a, b) =>
        a.country.toLowerCase().localeCompare(b.country.toLowerCase()));
      this.list = this.list.reverse();
      this.sortDirection = true;
      this.buttonArrow = '&#11161';
    }
  }

  sortByRegion() {
    if (this.sortDirection) {
      this.list = this.list.sort((a, b) =>
        a.region.toLowerCase().localeCompare(b.region.toLowerCase()));
      this.sortDirection = false;
      this.buttonArrow = '&#11163';
    } else {
      this.list = this.list.sort((a, b) =>
        a.region.toLowerCase().localeCompare(b.region.toLowerCase()));
      this.list = this.list.reverse();
      this.sortDirection = true;
      this.buttonArrow = '&#11161';
    }
  }

  sortByTown() {
    if (this.sortDirection) {
      this.list = this.list.sort((a, b) =>
        a.town.toLowerCase().localeCompare(b.town.toLowerCase()));
      this.sortDirection = false;
      this.buttonArrow = '&#11163';
    } else {
      this.list = this.list.sort((a, b) =>
        a.town.toLowerCase().localeCompare(b.town.toLowerCase()));
      this.list = this.list.reverse();
      this.sortDirection = true;
      this.buttonArrow = '&#11161';
    }
  }
}
