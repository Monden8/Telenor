import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { ItemService } from 'src/app/Services/item.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  items: Array<any>;
  form: FormGroup;

  constructor(private fb: FormBuilder, private authsvc: AuthService, private item: ItemService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllItems()
    this.form = this.fb.group({
      bid: ['', ,]
    });
  }
  getAllItems() {
    this.item.getItems().subscribe(res => {
      this.items = res
    })
  }
  isLoggedIn() {
    return !this.authsvc.isLoggedIn();
  }
  hasError(controlName: string, errorName: string) {
    return this.form.controls[controlName].hasError(errorName);
  }
}