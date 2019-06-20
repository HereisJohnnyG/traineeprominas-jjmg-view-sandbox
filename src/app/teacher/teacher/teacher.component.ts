import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherService } from '../teacher.service';
import { Teacher } from 'src/model/teacher';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})



export class TeacherComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'name', 'lastName', 'phd', 'action', 'update', 'exclude'];
  dataSource: Teacher[];
  isLoadingResults: boolean;
  constructor(private router: Router, private route: ActivatedRoute, private api: TeacherService) { }

  ngOnInit() {
      this.api.getTeachers()
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
    this.api.deleteTeacher(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/teacher']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
