import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENVIRONMENT } from '../../environment';
import { Router } from '@angular/router';
import { Article, ArticleDTO, ArticleDeliveryDateViewModel, ArticleGridViewModel } from '../models/Article';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  baseUrl:string = `${ENVIRONMENT.apiUrl}/Article`

  constructor(private router: Router, private http: HttpClient) { }

  create(article: Article): Observable<ArticleDTO> {
    return this.http.post<ArticleDTO>(`${this.baseUrl}/Create`, article);
  }

  linkDocument(form: FormData): Observable<ArticleDTO> {
    return this.http.post<ArticleDTO>(`${this.baseUrl}/LinkDocument`, form);
  }

  getByAuthorId(): Observable<ArticleDeliveryDateViewModel> {
    return this.http.get<ArticleDeliveryDateViewModel>(`${this.baseUrl}/GetByAuthorId`);
  }

  getAll(): Observable<ArticleGridViewModel[]> {
    return this.http.get<ArticleGridViewModel[]>(`${this.baseUrl}/GetAll`);
  }

  getById(id: number): Observable<ArticleDeliveryDateViewModel> {
    return this.http.get<ArticleDeliveryDateViewModel>(`${this.baseUrl}/GetById/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/Delete/${id}`);
  }
}