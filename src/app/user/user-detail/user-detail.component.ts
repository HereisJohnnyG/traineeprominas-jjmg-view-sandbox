import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from 'src/model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User = { id: null, name: '', lastName: '', profile: '' };
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute, private api: UserService) {}

  ngOnInit() {
    this.getUser(this.route.snapshot.params.id);
  }

  getUser(id) {
    this.api.getUser(id)
      .subscribe(data => {
        this.user = data;
        console.log(this.user);
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
