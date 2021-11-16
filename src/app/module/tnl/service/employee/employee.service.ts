import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  BASE_URL = 'http://localhost:9090';
  API_URL = this.BASE_URL + '/hr/empApi/';

  constructor(
    private http: HttpClient
  ) { }

  getList(): Observable<any> {
    return this.http.get<any>( this.API_URL);
  }
}
