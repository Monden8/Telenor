import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app--cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {

  respon: Array<any>

  constructor(
    @Inject(MAT_DIALOG_DATA) data,
    public dialogRef: MatDialogRef<CartDialogComponent>
  ) {
    dialogRef.disableClose = true;
    this.respon = data
    // console.log(data)
  }

  ngOnInit() { }

  close() {
    this.dialogRef.close();
  }
}
