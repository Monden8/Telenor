import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  items = [{
    id: "43212",
    name: " galaxy S",
    brand: "Samsung"
  },
  {
    id: "432123",
    name: " galaxy G",
    brand: "Samsung"
  },
  {
    id: "43312",
    name: " galaxy J",
    brand: "Samsung"
  },
  {
    id: "479312",
    name: " iPhone 6s",
    brand: "Apple"
  }
];
  constructor() { }

  ngOnInit() {
  }

}
