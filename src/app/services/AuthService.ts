import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) { }

  getToken():string{
    return this.cookieService.get('tokenUser');
  }

  isAdmin(): boolean {
    return this.cookieService.get('Admin') === '1'
  }
}
