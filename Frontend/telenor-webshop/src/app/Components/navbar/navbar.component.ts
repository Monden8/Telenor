import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authsvc: AuthService, private dialog: MatDialog, ) { }

  ngOnInit() {

  }
  isLoggedIn() {
    return !this.authsvc.isLoggedIn();
  }
  logout() {
    this.authsvc.logout().subscribe()
  }
}