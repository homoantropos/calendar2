import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { EventCreatorComponent } from './event-creator/event-creator.component';
import { Event } from './single-event/event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
calendar: Event[];
isVisible = false;
search = '';
searchField = 'title';
@ViewChild('filterInput') filterInputRef: ElementRef;

  title = 'calendar2';
	constructor(){
		this.calendar = [
		new Event ('Міжнародний спортивно-масовий захід серед учнів "ISF WORLD COOL GAMES"', new Date(2020, 11, 18), new Date(2020, 11, 23), 6, 'Київ', 'Україна', 'Київ'),
		new Event ('Чемпіонат України з рукопашного бою серед учнів', new Date(2020, 3, 15), new Date(2020, 3, 17), 3, 'Київ', 'Україна', 'Київ'),
		new Event ('ІІ зимова Гімназіада України з лижних гонок', new Date(2020, 3, 25), new Date(2020, 3, 26), 2, 'смт Тисовець', 'Україна', 'Львівська обл.'),
		new Event ('XV літня Універсіада України з тхеквондо (ВТФ) фінал', new Date(2020, 3, 5), new Date(2020, 3, 7), 3, 'Івано-Франківськ', 'Україна', 'Івано-Франківська обл.'),
		new Event ('Всесвітня літня Гімназіада', new Date(2020, 10, 10), new Date(2020, 10, 20), 17, 'Дзіндзян', 'Китайська Народна Республіка', ''),
		new Event ('Європейські університетські ігри', new Date(2020, 7, 18), new Date(2020, 7, 23), 12, 'Бєлград', 'Сербія', ''),
		new Event ('Всеукраїнський спортивно-масовий захід серед учнів "COOL GAMES" 2020-2021 років', new Date(2020, 9, 20), new Date(2021, 2, 23), 120, 'регіони', 'Україна', 'всі регіони'),
		new Event ('Чемпіонат світу з вейкбордингу та воднолижного спорту серед студентів', new Date(2020, 9, 22), new Date(2020, 9, 27), 6, 'Дніпро', 'Україна', 'Дніпропетровська обл.'),
		new Event ('Кубок України з боксу серед студентів', new Date(2020, 4, 20), new Date(2020, 4, 20), 3, 'Полтава', 'Україна', 'Полтавська обл.'),
		];
	}

	addEvent(event: Event) {
		this.calendar.unshift(event);
	}

	chandgeSearchField() {
		if(this.searchField == 'title'){
			this.searchField = 'start';
		} else {
			this.searchField = 'title';
		}
		this.filterInputRef.nativeElement.focus();
	}
}
