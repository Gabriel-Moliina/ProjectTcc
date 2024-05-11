import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { ENVIRONMENT } from '../../environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  baseUrl:string = `${ENVIRONMENT.apiUrl}/User`
  
  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/create`, user);
  }
}