import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LeaveApp} from '../../model/leaveApp/leave-app';

@Injectable({
  providedIn: 'root'
})
export class LeaveAppService {

  BASE_URL = 'http://localhost:9093';
  API_URL = this.BASE_URL + '/leave/leaveAppApi/';

  constructor(
    private http: HttpClient
  ) { }

  create(model: LeaveApp): Observable<LeaveApp> {
    return this.http.post<LeaveApp>( this.API_URL , model);
  }

  update(model: LeaveApp, id: number): Observable<LeaveApp> {
    return this.http.put<LeaveApp>( this.API_URL  + id, model);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>( this.API_URL + '/' + id);
  }


  getList(): Observable<any> {
    return this.http.get<any>( this.API_URL);
  }
}
