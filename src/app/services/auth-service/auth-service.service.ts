import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { StorageService } from '../storage/storage.service';

const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  readonly API_URL = environment.serverLocation + 'api/users';
  authToken: any;
  user: any;

  constructor(
    public http: HttpClient,
    public storeService: StorageService
  ) { }

  authUserCredentials(user, flag) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    switch (flag) {
      case 'l':
        return this.http.post(this.API_URL + '/login', user, { headers: headers });
      case 'r':
        return this.http.post(this.API_URL + '/register', user, { headers: headers });
      default:
        break;
    }
  }

  storeUserData(token, user) {
    this.storeService.setItem('id_token', token);
    this.storeService.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    this.storeService.removeItem('id_token');
    this.storeService.removeItem('user');
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loadUser() {
    const user = localStorage.getItem('user');
    this.user = JSON.parse(user);
    return this.user;
  }

  isAdmin() {
    return this.loadUser().type == 'AU'
  }

  loggedIn() {
    return !jwtHelper.isTokenExpired(localStorage.getItem('id_token'));
  }
}
