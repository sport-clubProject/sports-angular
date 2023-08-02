import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SportRepository } from '../Model/SportsRepository.component';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url=environment.authurl;
  constructor(private http: HttpClient,
              private repo:SportRepository) {}


  signup(data: any):Observable<any> {
    return this.http.post(this.url + '/api/Auth/register', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),

    });

  }

  login(data: any):Observable<any> {
    this.repo.loginstatus=true

    return this.http.post(this.url + '/api/Auth/login', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }
}
