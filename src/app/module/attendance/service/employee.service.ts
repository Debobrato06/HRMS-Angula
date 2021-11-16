import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  BASE_URL = 'http://localhost:9090';
  API_URL = this.BASE_URL + '/hr/empApi/';

  constructor(
    private http: HttpClient
  ) { }

  getListEmp(): Observable<any> {
    return this.http.get<any>( this.API_URL);
  }

}
