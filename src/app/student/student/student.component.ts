import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from '../../../model/student';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'name', 'lastName', 'age', 'course', 'action'];
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
        console.log(res);
      }, err => {
        console.log(err);
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
      for (const k in data[key]) {
        if(k == 'name'){
          if (data[key][k] !== null) {
            search = this.nestedFilterCheck(search, data[key], k);
          }
        }
      }
    } else {
      search += data[key];
    }
    return search;
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
