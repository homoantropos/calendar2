import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth-guard/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

    logOut(event: Event) {
        event.preventDefault();
        this.auth.logOut();
        this.router.navigate(['/admin', 'login']);
    }
}
