import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../../model/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  BASE_URL = 'http://localhost:9090';
  API_URL = this.BASE_URL + '/hr/empApi/';

  constructor(
    private http: HttpClient
  ) { }

  create(model: Employee): Observable<Employee> {
    return this.http.post<Employee>( this.API_URL, model);
  }

  update(model: Employee, id: number): Observable<Employee> {
    return this.http.put<Employee>( this.API_URL  + id, model);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>( this.API_URL + '/' + id);
  }

  getList(): Observable<any> {
    return this.http.get<any>( this.API_URL);
  }

}
