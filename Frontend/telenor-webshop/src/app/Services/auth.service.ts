import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Tokens } from '../token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  public loggedUser: BehaviorSubject<string> = new BehaviorSubject('');
  obs = this.loggedUser.asObservable();

  get user(): BehaviorSubject<string> {
    return this.loggedUser
  }

  constructor(private http: HttpClient) { }

  register(user: { username: string, password: string, email: string }): Observable<boolean> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post<any>(`${environment.apiUrl}/register`, user, { headers })
      .pipe(
        tap(res => {
          let tokens = { jwt: res.t, refreshToken: res.rt }
          this.doLoginUser(user.username, tokens)
        }),
        mapTo(true),
        catchError(error => {
          return of(false);
        }));
  }

  login(user: { username: string, password: string }): Observable<boolean> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post<any>(`${environment.apiUrl}/login`, user, { headers })
      .pipe(
        tap(res => {
          let tokens = { jwt: res.t, refreshToken: res.rt }
          this.doLoginUser(user.username, tokens)
        }),
        mapTo(true),
        catchError(error => {
          return of(false);
        }));
  }

  logout(): Observable<boolean> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${this.getRefreshToken()}`);
    return this.http.post<any>(`${environment.apiUrl}/logout`, {}, { headers })
      .pipe(
        tap(() => this.doLogoutUser()),
        mapTo(true),
        catchError(error => {
          return of(false);
        }));
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    return this.http.post<any>(`${environment.apiUrl}/refresh`, {
      'refreshToken': this.getRefreshToken()
    }).pipe(tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.jwt);
    }));
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(username: string, tokens: Tokens) {
    this.loggedUser.next(username);
    this.storeTokens(tokens);
  }

  private doLogoutUser() {
    this.loggedUser.next('');
    this.removeTokens();
  }

  getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }
}