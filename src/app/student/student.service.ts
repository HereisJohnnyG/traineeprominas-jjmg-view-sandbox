import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { apiUrl } from '../app.api';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Student } from '../../model/student';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${apiUrl}student`)
      .pipe(
        tap(students => console.log('leu os cursos')),
        catchError(this.handleError('getStudents', []))
      );
  }

  getStudent(id: number): Observable<Student> {
    const url = `${apiUrl}JSON/student/${id}`;
    return this.http.get<Student>(url).pipe(
      tap(_ => console.log(`leu o usuário id=${id}`)),
      catchError(this.handleError<Student>(`getStudent id=${id}`))
    );
  }

  postStudent(student): Observable<Student> {
    return this.http.post<Student>(`${apiUrl}student`, student, httpOptions).pipe(
      tap((student1: Student) => console.log(`adicionou o curso com w/ id=${student1.id}`)),
      catchError(this.handleError<Student>('postStudent'))
    );
  }

  putStudent(id, student): Observable<any> {
    const url = `${apiUrl}student/${id}`;
    return this.http.put(url, student, httpOptions).pipe(
      tap(_ => console.log(`atualiza o usuário com id=${id}`)),
      catchError(this.handleError<any>('updateStudent'))
    );
  }

  deleteStudent(id): Observable<Student> {
    const url = `${apiUrl}Student/${id}`;
    return this.http.delete<Student>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o usuário com id=${id}`)),
      catchError(this.handleError<Student>('deleteStudent'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
