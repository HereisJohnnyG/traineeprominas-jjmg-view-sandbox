import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/teacher/teacher.service';
import { Teacher } from 'src/model/teacher';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  dataSource: Teacher[];
  courseForm: FormGroup;
  name = '';
  period = 0;
  city = '';
  teacher: Teacher[];
  isLoadingResults = false;

  constructor(private snackBar: MatSnackBar,
              private router: Router,
              private apiTeacher: TeacherService,
              private api: CourseService,
              private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.getTeacher();
    this.courseForm = this.formBuilder.group({
      name : [null, Validators.required],
      period : [null],
      city : [null, Validators.required],
      teacher: [null, Validators.required]
    });
  }

  getTeacher() {
    this.apiTeacher.getTeachers()
    .subscribe(res => {
      this.dataSource = res;
      this.teacher = this.dataSource.map((item: Teacher) => {
        const teacher = new Teacher();
        teacher.id = item.id;
        teacher.name = item.name;
        teacher.lastName = item.lastName;
        teacher.phd = item.phd;
        return teacher;
      });
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  addCourse(form: NgForm) {
    this.isLoadingResults = true;
    this.api.postCourse(form)
      .subscribe(res => {
        this.openSnackBar('Curso cadastrado com sucesso!', 'Ok');
        const id = res.id;
        this.isLoadingResults = false;
        this.router.navigate(['/curso']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
}
