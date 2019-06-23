import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
    userForm: FormGroup;
    id: number;
    name: '';
    lastName = '';
    profile = '';
    isLoadingResults = false;

    constructor(private snackBar: MatSnackBar,
                private router: Router,
                private route: ActivatedRoute,
                private api: UserService,
                private formBuilder: FormBuilder
                ) { }

    ngOnInit() {
      this.getUser(this.route.snapshot.params.id);
      this.userForm = this.formBuilder.group({
        name : [null, Validators.required],
        lastName : [null, Validators.required],
        profile : [null, Validators.required]
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
    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    }

    putUser(form: NgForm) {
    this.isLoadingResults = true;
    this.api.putUser(this.id, form)
      .subscribe(res => {
          this.openSnackBar('Usuário editado com sucesso!', 'Ok');
          this.isLoadingResults = false;
          this.router.navigate(['/usuario/' + this.id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
