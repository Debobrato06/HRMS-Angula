import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LeaveType} from '../../model/leave-type';

@Injectable({
  providedIn: 'root'
})
export class LeaveTypeService {

  BASE_URL = 'http://localhost:9093';
  API_URL = this.BASE_URL + '/leave/leaveTypeApi/';
  REPORT = 'http://localhost:9099/report/pdf';

  constructor(
    private http: HttpClient
  ) { }

  create(model: LeaveType): Observable<LeaveType> {
    return this.http.post<LeaveType>( this.API_URL , model);
  }

  update(model: LeaveType, id: number): Observable<LeaveType> {
    return this.http.put<LeaveType>( this.API_URL  + id, model);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>( this.API_URL + id);
  }


  getList(): Observable<any> {
    return this.http.get<any>( this.API_URL);
  }

  generatePDF(): Observable<any>{
    return this.http.get(this.REPORT);
  }
}
