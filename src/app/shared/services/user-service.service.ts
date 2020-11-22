import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserRegistration } from '../models/UserRegistration';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base-service.service';
import { ConfigService } from '../utils/config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  baseUrl: string = '';
  private httpClient: HttpClient;
  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private loggedIn = false;
  constructor(httpCllient: HttpClient, confService: ConfigService) {
    super();
    this.httpClient = httpCllient;
    this.baseUrl = confService.getApiURI();
  }


  register(email: string, password: string, firstName: string, lastName: string, location: string): Observable<boolean> {
    let body = JSON.stringify({ email, password, firstName, lastName, location });
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.set('Access-Control-Allow-Origin', '*');
    return this.httpClient.post(this.baseUrl + "/accounts/register", body, { headers: headers }).pipe(map(res => true));
  }


  login(userName, password) {
    return this.httpClient
      .post(this.baseUrl + '/Authentication/LogIn',JSON.stringify({ 'email': userName, 'password': password }))
      .pipe(map((res: any) => {

        localStorage.setItem('auth_token', res.accessToken);
        this.loggedIn = true;
        this._authNavStatusSource.next(true);
        return true;
      }));
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    this._authNavStatusSource.next(false);
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
