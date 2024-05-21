import { Injectable } from '@angular/core';
import { ENVIRONMENT } from '../../environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Schedule } from '../models/Schedule';

@Injectable({
    providedIn: 'root'
})


export class ArticleScheduleService {
    baseUrl: string = `${ENVIRONMENT.apiUrl}/ArticleSchedule`

    constructor(private router: Router, private http: HttpClient) { }

    create(schedule: Schedule) {
        return this.http.post<any>(`${this.baseUrl}/Create`, schedule)
    }
}