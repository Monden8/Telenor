import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authsvc: AuthService,private dialog: MatDialog) { }

  hasError(controlName: string, errorName: string) {
    return this.form.controls[controlName].hasError(errorName);
  }
  submitData() {
    let user = {
      username: this.form.get('username').value,
      password: this.form.get('password').value,
      email: this.form.get('email').value,
      money: this.form.get('money').value,
    }
    this.authsvc.register(user)
    .subscribe(
      res => {
        if (!res) {
          this.dialog.open(DialogComponent, {
            data: { message: "UserName is Taken" }
          })
        } else {
          this.router.navigate(['']);
        }
      })
  }
  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required]],
      money: ['', [Validators.required]]
    });
  }
}
