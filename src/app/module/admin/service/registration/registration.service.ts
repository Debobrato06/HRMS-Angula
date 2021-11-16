import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Registration} from '../../model/registration';
import {RegistrationResponse} from "../../model/registration-response";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  BASE_URL = 'http://localhost:9091';
  API_URL = this.BASE_URL + '/admin/auth/registation/';

  public currentUser: Observable<Registration>;
  private currentUserSubject: BehaviorSubject<Registration>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Registration>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Registration {
    return this.currentUserSubject.value;
  }

  registration(model: Registration): Observable<RegistrationResponse> {
    return this.http.post<RegistrationResponse>( this.API_URL , model);
  }

  // register(model: Registration): Observable<any> {
  //   return this.http.post(this.API_URL , JSON.stringify(model),
  //     {headers: {'Content-Type': 'application/json; charset=UTF-8'}});
  // }


}
