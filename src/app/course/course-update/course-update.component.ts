import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { Teacher } from 'src/model/teacher';
import { TeacherService } from 'src/app/teacher/teacher.service';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.css']
})
export class CourseUpdateComponent implements OnInit {

  dataSource: Teacher[];
  courseForm: FormGroup;
  teacher: Teacher[];
  id: number;
  name: '';
  lastName = '';
  phd = false;
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute,
              private apiTeacher: TeacherService, private api: CourseService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getTeacher();
    this.getCourse(this.route.snapshot.params.id);
    this.courseForm = this.formBuilder.group({
      name : [null, Validators.required],
      city : [null, Validators.required],
      teacher : [null, Validators.required]
    });
  }

  getCourse(id) {
    this.api.getCourse(id).subscribe(data => {
      this.id = data.id;
      this.courseForm.setValue({
        name: data.name,
        period: data.period,
        city: data.city,
        teacher: data.teacher
      });
    });
  }

  putCourse(form: NgForm) {
  this.isLoadingResults = true;
  this.api.putCourse(this.id, form)
    .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/curso/' + this.id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
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


}
