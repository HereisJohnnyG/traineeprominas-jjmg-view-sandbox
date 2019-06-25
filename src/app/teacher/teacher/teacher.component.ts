import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherService } from '../teacher.service';
import { Teacher } from '../../../model/teacher';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})



export class TeacherComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'name', 'lastName', 'phd', 'action'];
  dataSource: MatTableDataSource<Teacher>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  isLoadingResults: boolean;


  constructor(private router: Router, private api: TeacherService) { }

  ngOnInit() {
      this.api.getTeachers()
      .subscribe(res => {
        this.dataSource = new MatTableDataSource<Teacher>(res);
        this.dataSource.paginator = this.paginator;
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
  deleteTeacher(id) {
    this.isLoadingResults = true;
    this.api.deleteTeacher(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/professor']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
