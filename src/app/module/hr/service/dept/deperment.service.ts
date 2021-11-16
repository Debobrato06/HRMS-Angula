import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Deperment} from '../../model/deperment';

@Injectable({
  providedIn: 'root'
})
export class DepermentService {

  BASE_URL = 'http://localhost:9090';
  API_URL = this.BASE_URL + '/hr/deptApi/';

  constructor(
    private http: HttpClient
  ) { }

  create(model: Deperment): Observable<Deperment> {
    return this.http.post<Deperment>( this.API_URL, model);
  }

  update(model: Deperment, id: number): Observable<Deperment> {
    return this.http.put<Deperment>( this.API_URL + '/' + id, model);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>( this.API_URL + '/' + id);
  }

  getList(): Observable<any> {
    return this.http.get<any>( this.API_URL);
  }

}
