import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { ItemService } from 'src/app/Services/item.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  items: Array<any>;

  constructor(private authsvc: AuthService, private item: ItemService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllItems();
  }
  getAllItems() {
    this.item.getItems().subscribe(res => {
      this.items = res
      console.log(this.items)
    })
  }
  addToCart(id) {
    if (this.isLoggedIn()) {
      this.dialog.open(DialogComponent, { data: { message: "Please login first !", next: "open" } })
    } else {
      this.item.addItem(id).subscribe(res => {
      })
    }
  }
  isLoggedIn() {
    return !this.authsvc.isLoggedIn();
  }
}