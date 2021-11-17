import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Report} from '../model/report';

@Injectable({
  providedIn: 'root'
})
export class ReportServiceService {

  BASE_URL = 'http://localhost:9094';
  API_URL = this.BASE_URL + '/report/api/report';
  constructor(
    private http: HttpClient
  ) { }

  printReport(model: Report): Observable<Blob> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(
      this.API_URL + '/', model,
      { headers, responseType: 'blob'}
    );
  }
}
