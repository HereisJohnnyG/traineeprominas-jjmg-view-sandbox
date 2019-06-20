import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from 'src/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'name', 'lastName', 'profile', 'action', 'update', 'exclude'];
  dataSource: User[];
  isLoadingResults: boolean;
  constructor(private router: Router, private route: ActivatedRoute, private api: UserService) { }

  ngOnInit() {
      this.api.getUsers()
      .subscribe(res => {
        this.dataSource = res;
        console.log(this.dataSource);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  deleteUser(id) {
    this.isLoadingResults = true;
    this.api.deleteUser(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/usuario']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
