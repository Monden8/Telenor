import { Component, OnInit } from "@angular/core";
import { ItemService } from "src/app/Services/item.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  public items = [];
  public brands: string[] = [];
  public colours: string[] = [];
  public platforms: string[] = [];
  public capacities: string[] = [];
  public dualSim: boolean;
  public singleSim: boolean;


  constructor(private item: ItemService) {}

  ngOnInit() {
    this.item.getItems().subscribe(res => {
      this.items = res;
      this.getMenu();
    });
  }

  getMenu() {
    for (let i: number = 0; i < this.items.length; i++) {
      this.brands.push(this.items[i].brand);
      this.colours.push(this.items[i].colour);
      this.platforms.push(this.items[i].opsystem);
      this.capacities.push(this.items[i].memory);
    }
    this.brands = [...new Set(this.brands)];
    this.colours = [...new Set(this.colours)];
    this.platforms = [...new Set(this.platforms)];
    this.capacities = [...new Set(this.capacities)];
  }

  onChange(event) {
    console.log(event);
  }
}
