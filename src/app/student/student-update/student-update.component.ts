import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../course/course.service';
import { StudentService } from '../student.service';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../../model/course';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  dataSource: Course[];
  studentForm: FormGroup;
  course: Course[];
  id: number;
  name: '';
  lastName = '';
  phd = false;
  courseForm: Course;
  isLoadingResults = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private apiCourse: CourseService,
              private api: StudentService,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getCourse();
    this.getStudent(this.route.snapshot.params.id);
    this.studentForm = this.formBuilder.group({
      name : [null, Validators.required],
      lastName : [null, Validators.required],
      age : [null, Validators.required],
      course : [null, Validators.required]
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  getStudent(id) {
    this.api.getStudent(id).subscribe(data => {
      this.id = data.id;
      this.studentForm.setValue({
        name: data.name,
        lastName: data.lastName,
        age: data.age,
        course: data.course
      });
    });
  }

  putStudent(form: NgForm) {
  this.isLoadingResults = true;
  this.api.putStudent(this.id, form)
    .subscribe(res => {
      this.openSnackBar('Estudante editado com sucesso!', 'Ok');
      this.isLoadingResults = false;
      this.router.navigate(['/estudante/' + this.id]);
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    }
    );
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

}
