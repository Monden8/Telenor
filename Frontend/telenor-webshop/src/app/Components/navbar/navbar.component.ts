import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { ItemService } from 'src/app/Services/item.service';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string;

  constructor(private itemSvc: ItemService, private authsvc: AuthService, private dialog: MatDialog, ) { }

  ngOnInit() {
    this.authsvc.obs.subscribe(
      res => {
        this.username = res
      });
    if (!this.isLoggedIn() && this.username == '') {
      this.username = jwt_decode(this.authsvc.getRefreshToken()).username
    }
  }

  isLoggedIn() {
    return !this.authsvc.isLoggedIn();
  }
  logout() {
    this.authsvc.logout().subscribe()
  }
  openLogin() {
    this.dialog.open(LoginDialogComponent, {})
  }
  openCart() {
    if (this.isLoggedIn()) {
      this.openLogin()
    } else {
      this.itemSvc.getMyCart().subscribe(res => {
        if (res.length < 1) {
          this.dialog.open(DialogComponent, {
            data: { message: 'Your cart is empty!' }
          })
        } else {
          this.dialog.open(CartDialogComponent, {
            data: res
          })
        }
      })
    }
  }
}