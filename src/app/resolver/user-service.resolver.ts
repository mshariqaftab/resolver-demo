import { Resolve } from '@angular/router';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceResolver implements Resolve<User[]> {
  constructor(private http: HttpClient) { }

  resolve(): Observable<User[]> {
    return this.http.get<User[]>('https://reqres.in/api/users');
  }
}
