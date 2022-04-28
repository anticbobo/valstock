import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Moment } from 'moment';
import * as moment from 'moment';
import { Observable, tap } from 'rxjs';
import { URL_CONFIG } from '~/shared/helpers/constants';
import { User } from './login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private static LOGIN_URL = `${URL_CONFIG.BASE_URL}/user/login`;
  public isAuthenticated = false;

  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Observable<any> {
    return this.http
      .post<User>(LoginService.LOGIN_URL, { username, password })
      .pipe(tap((res) => this.setSession(res)));
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  private getExpiration(): Moment {
    const expiration = localStorage.getItem('expires_at');
    let expiresAt: string;
    if (!!expiration) {
      expiresAt = JSON.parse(expiration);
    } else {
      const date = new Date();

      expiresAt = date.setSeconds(date.getSeconds() - 1).toString();
    }
    return moment(expiresAt);
  }

  private setSession(authResult: any) {
    const expiresAt = moment().add(1, 'hours');
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }
}
