import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ENVIRONMENT } from '../../environment';
import { Advisor, AdvisorGridViewModel } from "../models/Advisor";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AdvisorService {
    baseUrl: string = `${ENVIRONMENT.apiUrl}/Advisor`

    constructor(private router: Router, private http: HttpClient) { }

    create(advisor:Advisor){
        return this.http.post<any>(`${this.baseUrl}/Create`, advisor);
    }

    delete(id: number){
        return this.http.delete<any>(`${this.baseUrl}/Delete/${id}`);
      }

    getAll(): Observable<AdvisorGridViewModel[]> {
        return this.http.get<AdvisorGridViewModel[]>(`${this.baseUrl}/GetAll`);
    }
}