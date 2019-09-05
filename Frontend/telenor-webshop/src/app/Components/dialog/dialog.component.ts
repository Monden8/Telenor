import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"]
})
export class DialogComponent implements OnInit {
  errormsg: string;
  next: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) data,
    public dialogRef: MatDialogRef<DialogComponent>,
    private dialog: MatDialog
  ) {
    dialogRef.disableClose = true;

    this.errormsg = data.message;
    this.next = data.next;
  }

  ngOnInit() { }

  close() {
    if (this.next == "open") {
      this.dialog.open(LoginDialogComponent, {})
    }
    this.dialogRef.close();
  }
}
