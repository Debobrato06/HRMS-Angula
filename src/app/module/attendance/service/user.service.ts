import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  BASE_URL = 'http://localhost:9091';
  API_URL = this.BASE_URL + '/admin/api/user/';

  constructor(
    private http: HttpClient
  ) { }

  getListUser(): Observable<any> {
    return this.http.get<any>( this.API_URL);
  }

}
