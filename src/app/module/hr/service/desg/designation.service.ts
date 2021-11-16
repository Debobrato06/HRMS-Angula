import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Designation} from '../../model/designation';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  BASE_URL = 'http://localhost:9090';
  API_URL = this.BASE_URL + '/hr/desgApi/';

  constructor(
    private http: HttpClient
  ) { }

  create(model: Designation): Observable<Designation> {
    return this.http.post<Designation>( this.API_URL, model);
  }

  update(model: Designation, id: number): Observable<Designation> {
    return this.http.put<Designation>( this.API_URL + '/' + id, model);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>( this.API_URL + '/' + id);
  }

  getList(): Observable<any> {
    return this.http.get<any>( this.API_URL);
  }

}
