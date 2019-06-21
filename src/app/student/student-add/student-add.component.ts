import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/course/course.service';
import { StudentService } from '../student.service';
import { Course } from 'src/model/course';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  dataSource: Course[];
  studentForm: FormGroup;
  name: string;
  lastName: string;
  age: number;
  course: Course[];
  isLoadingResults = false;

  constructor(private router: Router, private apiCourse: CourseService, private api: StudentService,
              private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.getCourse();
    this.studentForm = this.formBuilder.group({
      name : [null, Validators.required],
      lastName : [null, [Validators.required]],
      age : [null, Validators.required],
      course: [null, Validators.required]
    });
  }

  getCourse() {
    this.apiCourse.getCourses()
    .subscribe(res => {
      this.dataSource = res;
      this.course = this.dataSource.map((item: Course) => {
        const course = new Course();
        course.id = item.id;
        course.name = item.name;
        return course;
      });
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  addStudent(form: NgForm) {
    this.isLoadingResults = true;
    this.api.postStudent(form)
      .subscribe(res => {
          const id = res.id;
          this.isLoadingResults = false;
          this.router.navigate(['/estudante']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }
}
