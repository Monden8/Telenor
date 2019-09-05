import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  respon: Array<any>
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) data,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private fb: FormBuilder, private router: Router,
    private authsvc: AuthService,
    private dialog: MatDialog
  ) {
    dialogRef.disableClose = false;
  }

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
          this.close()
        }
      })
  }
  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  close() {
    this.dialogRef.close();
  }
}
