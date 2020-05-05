import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/interfaces';
import {AuthService} from '../auth-guard/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  loginform: FormGroup;
  submitted = false;

  constructor(
      private auth: AuthService,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  submit() {
    if (this.loginform.invalid) {
      return;
    }
    const user: User = {
      email: this.loginform.value.email,
      password: this.loginform.value.password
    };
    this.auth.logIn(user).subscribe(() => {
      this.submitted = true;
      this.loginform.reset();
      this.router.navigate(['/admin', 'dashboard']);
      this.submitted = false;
    });

  }
}
