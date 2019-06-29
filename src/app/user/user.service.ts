import { Injectable } from '@angular/core';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/user';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};


@Injectable({
  providedIn: 'root'
})


export class UserService {

  readonly apiUrl = 'https://traineeprominas-ncsp-sandbox.herokuapp.com/api/v1/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}JSON/user`)
      .pipe(
        tap(users => console.log('getUser')),
        catchError(this.handleError('getUsers', []))
      );
  }

  getUser(id: number): Observable<User> {
    const url = `${this.apiUrl}JSON/user/${id}`;
    return this.http.get<User>(url).pipe(
      tap(users => console.log(`getuser/${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  postUser(user): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}user`, user, httpOptions).pipe(
      tap((user1: User) => console.log(`postUser/${user1.id}`)),
      catchError(this.handleError<User>('postUser'))
    );
  }

  putUser(id, user): Observable<any> {
    const url = `${this.apiUrl}user/${id}`;
    return this.http.put(url, user, httpOptions).pipe(
      tap(_ => console.log(`putUser/${id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  deleteUser(id): Observable<User> {
    const url = `${this.apiUrl}user/${id}`;
    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_ => console.log(`removeUser/${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}





