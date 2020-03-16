import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { IApiResponse } from '../models/data';
import { allCountriesStats } from './api.endpoints';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient) {}

    getAllCountriesStats(): Observable<IApiResponse> {
        const httpOptions = {
            headers: new HttpHeaders({
                'x-rapidapi-host': environment.xRapidApiHost,
                'x-rapidapi-key': environment.xRapidApiKey
            })
        };
        return this.http
            .get<IApiResponse>(allCountriesStats(environment.apiUrl), httpOptions)
            .pipe(retry(1), catchError(this.handleError));
    }

    handleError(error): Observable<never> {
        let errorMessage = '';
        error.error instanceof ErrorEvent
            ? (errorMessage = error.error.message)
            : (errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`);
        return throwError(errorMessage);
    }
}
