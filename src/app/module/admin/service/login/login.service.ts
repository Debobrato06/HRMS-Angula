import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Login} from '../../model/login';
import {LoginResponse} from '../../model/login-response';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  BASE_URL = 'http://localhost:9091';
  API_URL = this.BASE_URL + '/admin/auth/login/';


  constructor(private http: HttpClient) {
  }

  login(model: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>( this.API_URL , model);
  }

}
