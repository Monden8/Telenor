import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"]
})
export class DialogComponent implements OnInit {
  errormsg: string;
  statuscode: number;
  constructor(
    @Inject(MAT_DIALOG_DATA) data,
    public dialogRef: MatDialogRef<DialogComponent>
  ) {
    dialogRef.disableClose = true;

    this.errormsg = data.message;
    this.statuscode = 400;
  }

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }
}
