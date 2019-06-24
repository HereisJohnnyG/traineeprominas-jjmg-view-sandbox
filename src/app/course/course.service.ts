import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

import { Course } from 'src/model/course';
import { apiUrl } from '../app.api';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${apiUrl}course`)
      .pipe(
        tap(courses => console.log('leu os cursos')),
        catchError(this.handleError('getCourses', []))
      );
  }

  getCourse(id: number): Observable<Course> {
    const url = `${apiUrl}JSON/course/${id}`;
    return this.http.get<Course>(url).pipe(
      tap(courses => console.log(`leu o usuário id=${id}`)),
      catchError(this.handleError<Course>(`getCourse id=${id}`))
    );
  }

  postCourse(course): Observable<Course> {
    return this.http.post<Course>(`${apiUrl}course`, course, httpOptions).pipe(
      tap((course1: Course) => console.log(`adicionou o curso com w/ id=${course1.id}`)),
      catchError(this.handleError<Course>('postCourse'))
    );
  }

  putCourse(id, course): Observable<any> {
    const url = `${apiUrl}course/${id}`;
    return this.http.put(url, course, httpOptions).pipe(
      tap(_ => console.log(`atualiza o usuário com id=${id}`)),
      catchError(this.handleError<any>('updateCourse'))
    );
  }

  deleteCourse(id): Observable<Course> {
    const url = `${apiUrl}Course/${id}`;
    return this.http.delete<Course>(url, httpOptions).pipe(
      tap(courses => console.log(`remove o usuário com id=${id}`)),
      catchError(this.handleError<Course>('deleteCourse'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }


}
