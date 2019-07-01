import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Teacher } from '../../model/teacher';
import {apiUrl} from '../app.api';



@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  
  private getHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('authorization')}`
      })
    };
  }
  constructor(private http: HttpClient) { }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${apiUrl}JSON/teacher`, this.getHeaders())
      .pipe(
        tap(teachers => console.log('leu os usuários')),
        catchError(this.handleError('getTeachers', []))
      );
  }

  getTeacher(id: number): Observable<Teacher> {
    const url = `${apiUrl}JSON/teacher/${id}`;
    return this.http.get<Teacher>(url, this.getHeaders()).pipe(
      tap(_ => console.log(`leu o usuário id=${id}`)),
      catchError(this.handleError<Teacher>(`getTeacher id=${id}`))
    );
  }

  postTeacher(teacher): Observable<Teacher> {
    return this.http.post<Teacher>(`${apiUrl}teacher`, teacher, this.getHeaders()).pipe(
      tap((teacher1: Teacher) => console.log(`adicionou o usuário com w/ id=${teacher1.id}`)),
      catchError(this.handleError<Teacher>('postTeacher'))
    );
  }

  putTeacher(id, teacher): Observable<any> {
    const url = `${apiUrl}teacher/${id}`;
    return this.http.put(url, teacher, this.getHeaders()).pipe(
      tap(_ => console.log(`atualiza o usuário com id=${id}`)),
      catchError(this.handleError<any>('updateTeacher'))
    );
  }

  deleteTeacher(id): Observable<Teacher> {
    const url = `${apiUrl}Teacher/${id}`;
    return this.http.delete<Teacher>(url, this.getHeaders()).pipe(
      tap(_ => console.log(`remove o usuário com id=${id}`)),
      catchError(this.handleError<Teacher>('deleteTeacher'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
