import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
    userForm: FormGroup;
    id: number = null;
    name: FormGroup;
    lastName: String = '';
    profile: String = '';
    isLoadingResults = false;

    constructor(private router: Router, private route: ActivatedRoute, private api: UserService, private formBuilder: FormBuilder) { }

    ngOnInit() {
      this.getUser(this.route.snapshot.params['id']);
      this.userForm = this.formBuilder.group({
        'name' : [null, Validators.required],
        'lastName' : [null, Validators.required],
        'profile' : [null, Validators.required]
      });
    }
    getUser(id) {
      this.api.getUser(id).subscribe(data => {
        this.id = data.id;
        this.userForm.setValue({
          name: data.name,
          lastName: data.lastName,
          profile: data.profile
        });
      });
    }
  
    putUser(form: NgForm) {
    this.isLoadingResults = true;
    this.api.putUser(this.id, form)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/getUsers/' + this.id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}