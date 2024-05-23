import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ENVIRONMENT } from '../../environment';
import { Observable } from "rxjs";
import { CourseGridViewModel } from "../models/Course";

@Injectable({
    providedIn: 'root'
})

export class CourseService {
    baseUrl: string = `${ENVIRONMENT.apiUrl}/Course`

    constructor(private http: HttpClient) { }

    getAll(): Observable<CourseGridViewModel[]> {
        return this.http.get<CourseGridViewModel[]>(`${this.baseUrl}/GetAll`);
    }
}