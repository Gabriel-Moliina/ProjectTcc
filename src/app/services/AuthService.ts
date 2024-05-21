import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken():string{
    return localStorage.getItem('tokenUser')?.toString() ?? '';
  }

  isAdmin(): boolean {
    return localStorage.getItem('Admin')?.toString() === '1'
  }
}
