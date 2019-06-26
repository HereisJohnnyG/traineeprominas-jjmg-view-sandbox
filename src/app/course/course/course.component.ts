import { Component, OnInit, ViewChild } from '@angular/core';
import { Course } from '../../../model/course';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'name', 'period', 'city', 'teacher', 'action'];
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

  applyFilter(filterValue: string) {
    this.dataSource.filterPredicate = (data, filter: string)  => {
      const accumulator = (currentTerm, key) => {
        return this.nestedFilterCheck(currentTerm, data, key);
      };
      const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
      // Transform the filter by converting it to lowercase and removing whitespace.
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) !== -1;
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  nestedFilterCheck(search, data, key) {
    if (typeof data[key] === 'object') {
      for (let i = 0; i < data[key].length; i++) {
        for (const k in data[key][i]) {
          if (k === 'name') {
            if (data[key][k] !== null) {
              search = this.nestedFilterCheck(search, data[key][i], k);
            }
          }
        }
      }
    } else {
      search += data[key];
    }
    return search;
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
