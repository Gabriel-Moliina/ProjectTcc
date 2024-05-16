import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENVIRONMENT } from '../../environment';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Article, ArticleDTO } from '../models/Article';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  baseUrl:string = `${ENVIRONMENT.apiUrl}/Article`

  constructor(private router: Router, private http: HttpClient, private cookieService: CookieService) { }

  create(article: Article): Observable<ArticleDTO> {
    return this.http.post<ArticleDTO>(`${this.baseUrl}/Create`, article);
  }

  linkDocument(form: FormData): Observable<ArticleDTO> {
    return this.http.post<ArticleDTO>(`${this.baseUrl}/LinkDocument`, form);
  }
}