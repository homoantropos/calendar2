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
		new Event ('Міжнародний спортивно-масовий захід серед учнів "ISF WORLD COOL GAMES"', '18.11.20', '23.11.20', 6, 'Київ', 'Україна', 'Київ'),
		new Event ('Чемпіонат України з рукопашного бою серед учнів', '15.03.20', '17.03.20', 3, 'Київ', 'Україна', 'Київ'),
		new Event ('ІІ зимова Гімназіада України з лижних гонок', '25.03.20', '26.03.20', 2, 'смт Тисовець', 'Україна', 'Львівська обл.'),
		new Event ('XV літня Універсіада України з тхеквондо (ВТФ) фінал', '05.03.20', '07.03.20', 3, 'Івано-Франківськ', 'Україна', 'Івано-Франківська обл.'),
		new Event ('Всесвітня літня Гімназіада', '10.10.20', '27.10.20', 17, 'Дзіндзян', 'Китайська Народна Республіка', ''),
		new Event ('Європейські університетські ігри', '18.07.20', '23.07.20', 12, 'Бєлград', 'Сербія', ''),
		new Event ('Всеукраїнський спортивно-масовий захід серед учнів "COOL GAMES" 2020-2021 років', '17.09.20', '23.02.21', 120, 'регіони', 'Україна', 'всі регіони'),
		new Event ('Чемпіонат світу з вейкбордингу та воднолижного спорту серед студентів', '22.09.20', '27.09.20', 6, 'Дніпро', 'Україна', 'Дніпропетровська обл.'),
		new Event ('Кубок України з боксу серед студентів', '18.04.20', '20.04.20', 3, 'Полтава', 'Україна', 'Полтавська обл.'),
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
