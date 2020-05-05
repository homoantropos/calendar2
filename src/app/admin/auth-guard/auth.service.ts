import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FbAuthResponce, User} from '../../shared/interfaces';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()

export class AuthService {
  isAuth = false;

  constructor(
    private http: HttpClient
  ) {}

  get token(): string {
    const expDate = new Date(localStorage.getItem('fb-token-exp'));
    if (new Date() > expDate) {
      return null;
    }
    return localStorage.getItem('fb-token');
  }

  logIn(user: User): Observable<any> {
    user.returnSecureToken = true;
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user).
      pipe(
        tap(this.setToken)
        );
  }

  logOut() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

 setToken(responce: FbAuthResponce | null) {
    if (responce) {
      const expDate = new Date(new Date().getTime() + +responce.expiresIn * 1000);
      localStorage.setItem('fb-token', responce.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }

 }
}
