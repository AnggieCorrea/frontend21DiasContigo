import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
//import { ContemplationConsideration } from '../models/ContemplationConsideration';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  urlBase = 'http://127.0.0.1:80';
  usersList: User[] = [];

  constructor(private http: HttpClient) {}

  /*private handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    return throwError('An error has ocurred');
  }

  private get<T>(url): Observable<T> {
    console.log('get:', url);
    return this.http
      .get<T>(url, {
        withCredentials: true,
        headers: { Authorization: localStorage.getItem('Token') },
      })
      .pipe(
        // retry(5),
        catchError(this.handleError)
      );
  }

  private post<T>(url, data: T): Observable<T> {
    console.log('post:', url);
    return this.http
      .post<T>(url, data, {
        withCredentials: true,
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .pipe(
        // retry(5),
        catchError(this.handleError)
      );
  }
  private put<T>(url, data: T): Observable<T> {
    console.log('put:', url);
    return this.http.put<T>(url, data, { withCredentials: true }).pipe(
      // retry(5),
      catchError(this.handleError)
    );
  }
  private delete<T>(url): Observable<T> {
    console.log('delete:', url);
    return this.http.delete<T>(url, { withCredentials: true }).pipe(
      // retry(5),
      catchError(this.handleError)
    );
  }

  //Métodos

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlBase);
  }

  public getUserByEmail(email: string): Observable<User> {
    return this.get<User>(this.urlBase + '/usuarios/' + email);
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(this.urlBase + '/createUser', user);
  }

  public logInUser(mail: string, password: string) {
    const user = {
      email: mail,
      password,
    };
    return fetch(this.urlBase + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        console.log(response.headers.get('Authorization'));
        localStorage.setItem('Token', response.headers.get('Authorization'));
      })
      .catch((error) => {
        console.error(error);
      });
  }*/

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlBase);
  }

  public getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(this.urlBase + '/usuarios/' + email);
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(this.urlBase + '/usuarios/', user);
  }
}
