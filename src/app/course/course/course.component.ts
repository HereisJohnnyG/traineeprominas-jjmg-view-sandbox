import { Component, OnInit, ViewChild } from '@angular/core';
import { Course } from 'src/model/course';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'name', 'period', 'city', 'teacher', 'action', 'update', 'exclude'];
  dataSource: MatTableDataSource<Course>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  isLoadingResults: boolean;
  constructor(private router: Router, private api: CourseService) { }

  ngOnInit() {
    this.api.getCourses()
      .subscribe(res => {
        this.dataSource = new MatTableDataSource<Course>(res);
        this.dataSource.paginator = this.paginator;
        this.isLoadingResults = false;
      }, err => {
        this.isLoadingResults = false;
      });
  }

  deleteCourse(id) {
    this.isLoadingResults = true;
    this.api.deleteCourse(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/curso']);
        }, (err) => {
          this.isLoadingResults = false;
        }
      );
  }

}
