import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {FbAuthResponse, User} from '../../shared/interfaces';
import {environment} from '../../../environments/environment';
import {Observable, Subject, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public error$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient
  ) {}

  get token(): string {
    const expDate = new Date(localStorage.getItem('fb-token-exp'));
    if (new Date() > expDate) {
      this.logOut();
      return null;
    }
    return localStorage.getItem('fb-token');
  }

  logIn(user: User): Observable<any> {
    user.returnSecureToken = true;
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user).
      pipe(
        tap(this.setToken),
      catchError(this.errorHandle.bind(this))
        );
  }

  logOut() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private errorHandle(error: HttpErrorResponse) {
    const {message} = error.error.error;
    if (message) {
      switch (message) {
        case('INVALID_EMAIL'):
          this.error$.next('Невірний емейл');
          break;
        case('INVALID_PASSWORD'):
          this.error$.next('Невірний пароль');
          break;
        case('EMAIL_NOT_FOUND'):
          this.error$.next('Емейл не знайдено');
          break;
      }
    }
    return throwError(error);
  }

 private setToken(response: FbAuthResponse | null) {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem('fb-token', response.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }

 }
}
