import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../../model/user';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { TestService } from '../../test.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'name', 'lastName', 'profile', 'action'];
  dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  isLoadingResults = true;
  constructor(
    private api: UserService,
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.api.getUsers()
    .subscribe(res => {
      this.dataSource = new MatTableDataSource<User>(res);
      this.dataSource.paginator = this.paginator;
      this.isLoadingResults = false;
    }, err => {
      this.isLoadingResults = false;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteUser(id) {
    this.isLoadingResults = true;
    this.api.deleteUser(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/usuario']);
        }, (err) => {
          this.isLoadingResults = false;
        }
      );
  }

}
