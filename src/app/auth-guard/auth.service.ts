import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isAuth = false;

  logIn() {
    this.isAuth = true;
  }

  logOut() {
    this.isAuth = false;
  }

  isAuthentificated(): Promise<boolean> {
    return new Promise(resolve => {
      resolve(this.isAuth);
    });
  }
}
