import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authsvc: AuthService,private dialog: MatDialog) { }

  hasError(controlName: string, errorName: string) {
    return this.form.controls[controlName].hasError(errorName);
  }
  submitData() {
    let user = {
      username: this.form.get('username').value,
      password: this.form.get('password').value
    }
    this.authsvc.login(user).subscribe(
      res => {
        if (!res) {
          this.dialog.open(DialogComponent, {
            data: { message: "Username or Password is Wrong" }
          })
        } else {
          this.router.navigate(['']);
        }
      })
  }
  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
}
