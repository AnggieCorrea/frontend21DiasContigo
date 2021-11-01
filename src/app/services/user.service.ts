import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  urlBase = 'http://127.0.0.1:90';
  usersList: User[] = [];

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlBase);
  }

  public getUserByEmail(user: User): Observable<User> {
    return this.http.post<User>(this.urlBase + '/usuarios/login', user);
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(this.urlBase + '/usuarios', user);
  }
}
