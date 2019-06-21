import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from 'src/model/student';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'name', 'lastName', 'age', 'course', 'action', 'update', 'exclude'];
  dataSource: MatTableDataSource<Student>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  isLoadingResults: boolean;
  constructor(private router: Router, private api: StudentService) { }

  ngOnInit() {
    this.api.getStudents()
      .subscribe(res => {
        this.dataSource = new MatTableDataSource<Student>(res);
        this.dataSource.paginator = this.paginator;
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  deleteStudent(id) {
    this.isLoadingResults = true;
    this.api.deleteStudent(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/student']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
