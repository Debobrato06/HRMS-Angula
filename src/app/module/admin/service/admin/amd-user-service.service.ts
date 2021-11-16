import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AmdUser} from '../../model/admin';



@Injectable({
  providedIn: 'root'
})
export class AmdUserServiceService {

  BASE_URL = 'http://localhost:9091';
  API_URL = this.BASE_URL + '/admin/user/';

  constructor(
    private http: HttpClient
  ) {
  }

  create(model: AmdUser): Observable<AmdUser> {
    return this.http.post<AmdUser>(this.API_URL, model);
  }
  update(model: AmdUser, id: number): Observable<AmdUser> {
    return this.http.put<AmdUser>(this.API_URL + id, model);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.API_URL + '/' + id);
  }


  getList(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }

  find(id: number): Observable<any> {
    return this.http.get<any>(this.API_URL + '/' + id);
  }
}
