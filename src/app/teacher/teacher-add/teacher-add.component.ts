import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {


  teacherForm: FormGroup;
  isLoadingResults = false;
  constructor(private router: Router, private api: TeacherService, private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.teacherForm = this.formBuilder.group({
      name : [null, Validators.required],
      lastName : [null, [Validators.required]],
      phd : [null, Validators.required]
    });
  }

  addTeacher(form: NgForm) {
    this.isLoadingResults = true;
    this.api.postTeacher(form)
      .subscribe(res => {
          const id = res.id;
          this.isLoadingResults = false;
          this.router.navigate(['/professor']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
