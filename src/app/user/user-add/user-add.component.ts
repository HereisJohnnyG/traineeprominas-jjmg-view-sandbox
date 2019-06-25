import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})

export class UserAddComponent implements OnInit {
  productForm: FormGroup;
  isLoadingResults = false;
  constructor(private snackBar: MatSnackBar, private router: Router, private api: UserService, private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name : [null, Validators.required],
      lastName : [null, [Validators.required]],
      profile : [null, Validators.required]
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


  addProduto(form: NgForm) {
    this.isLoadingResults = true;
    this.api.postUser(form)
      .subscribe(res => {
          this.openSnackBar('Usuário cadastrado com sucesso!', 'Ok');
          const id = res.id;
          this.isLoadingResults = false;
          this.router.navigate(['/usuario']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
