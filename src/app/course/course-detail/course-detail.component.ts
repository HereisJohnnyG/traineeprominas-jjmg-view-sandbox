import { Component, OnInit } from '@angular/core';
import { Course } from 'src/model/course';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course: Course = { id: null, name: '', city: '',  period: null, teacher: []};
  isLoadingResults = true;


  constructor(private router: Router, private route: ActivatedRoute, private api: CourseService) { }

  ngOnInit() {
    this.getCourse(this.route.snapshot.params.id);
  }

  getCourse(id) {
    this.api.getCourse(id)
      .subscribe(data => {
        this.course = data;
        console.log(this.course);
        this.isLoadingResults = false;
      });
  }
  deleteCourse(id) {
    this.isLoadingResults = true;
    this.api.deleteCourse(id)
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
