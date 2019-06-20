import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/model/teacher';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {

  teacher: Teacher = { id: null, name: '', lastName: '', phd: false };
  isLoadingResults = true;


  constructor(private router: Router, private route: ActivatedRoute, private api: TeacherService) { }

  ngOnInit() {
    this.getTeacher(this.route.snapshot.params.id);
  }

  getTeacher(id) {
    this.api.getTeacher(id)
      .subscribe(data => {
        this.teacher = data;
        console.log(this.teacher);
        this.isLoadingResults = false;
      });
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
