import { Component, OnInit } from '@angular/core';
import { Course } from 'src/model/course';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'name', 'period', 'city', 'teacher', 'action', 'update', 'exclude'];
  dataSource: Course[];
  isLoadingResults: boolean;
  constructor(private router: Router, private api: CourseService) { }

  ngOnInit() {
    this.api.getCourses()
      .subscribe(res => {
        this.dataSource = res;
        console.log(this.dataSource);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  deleteTeacher(id) {
    this.isLoadingResults = true;
    this.api.deleteCourse(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/curso']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
