import {Component} from '@angular/core';
import {AuthService} from './auth-guard/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'calendar2';
  constructor(
    public auth: AuthService
  ) {
  }

}
