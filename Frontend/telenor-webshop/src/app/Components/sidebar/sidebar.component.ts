import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  items = [
    { brand: "Samsung", id: 1, colour: "black" },
    { brand: "Apple", id: 2, colour: "white" },
    { brand: "LG", id: 3, colour: "black" },
    { brand: "Samsung", id: 54, colour: "black" }
  ];
  isChecked = false;
  constructor() {}

  ngOnInit() {}

  onChange(event) {
    console.log(event);
  }
}
