import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AttnAdmin} from '../model/attn-admin';
import {AttnAdminResponse} from '../model/attnAdmin-response';


@Injectable({
  providedIn: 'root'
})
export class AttnAdminService {


  BASE_URL = 'http://localhost:9095';
  API_URL = this.BASE_URL + '/attendance/api/attn-admin/';
  POST_API = this.API_URL + 'save';

  constructor(
    private http: HttpClient
  ) { }

  create(model: AttnAdmin): Observable<AttnAdminResponse> {
    return this.http.post<AttnAdminResponse>( this.POST_API, model);
  }

  // update(model: Employee, id: number): Observable<Employee> {
  //   return this.http.put<Employee>( this.API_URL  + id, model);
  // }
  //
  // delete(id: number): Observable<any> {
  //   return this.http.delete<any>( this.API_URL + '/' + id);
  // }

  getList(): Observable<any> {
    return this.http.get<any>( this.API_URL);
  }
}
