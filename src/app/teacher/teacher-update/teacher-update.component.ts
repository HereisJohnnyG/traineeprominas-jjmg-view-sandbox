import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherService } from '../teacher.service';


@Component({
  selector: 'app-teacher-update',
  templateUrl: './teacher-update.component.html',
  styleUrls: ['./teacher-update.component.css']
})

export class TeacherUpdateComponent implements OnInit {

  teacherForm: FormGroup;
  id: number;
  name: '';
  lastName = '';
  phd = false;
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: TeacherService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getTeacher(this.route.snapshot.params.id);
    this.teacherForm = this.formBuilder.group({
      name : [null, Validators.required],
      lastName : [null, Validators.required],
      phd : [null, Validators.required]
    });
  }

  getTeacher(id) {
    this.api.getTeacher(id).subscribe(data => {
      this.id = data.id;
      this.teacherForm.setValue({
        name: data.name,
        lastName: data.lastName,
        phd: data.phd
      });
    });
  }

  putTeacher(form: NgForm) {
  this.isLoadingResults = true;
  this.api.putTeacher(this.id, form)
    .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/professor/' + this.id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
}

}
