import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserLogin, UserToken } from '../models/User';
import { ENVIRONMENT } from '../../environment';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  baseUrl:string = `${ENVIRONMENT.apiUrl}/User`

  constructor(private router: Router, private http: HttpClient, private cookieService: CookieService) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/Create`, user);
  }

  login(userLogin: UserLogin): Observable<UserToken> {
    return this.http.post<UserToken>(`${this.baseUrl}/Login`, userLogin);
  }

  logOut(){
    this.cookieService.delete('tokenUser');
    console.log(this.router.url)
    this.router.navigate(['/login']);
  }
}