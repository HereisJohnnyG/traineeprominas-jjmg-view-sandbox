import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from 'src/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'name', 'lastName', 'profile', 'action', 'exclude'];
  dataSource: User[];
  isLoadingResults: boolean;
  constructor(private _api: UserService) { }

  ngOnInit() {
      this._api.getUsers()
      .subscribe(res => {
        this.dataSource = res;
        console.log(this.dataSource);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
}
