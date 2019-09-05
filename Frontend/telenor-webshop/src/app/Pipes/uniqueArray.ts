import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "uniqueBrand" })
export class PipeService implements PipeTransform {
  transform(items: Array<any>): Array<any> {
    let menuItem = [];
    for (let i: number = 0; i < items.length; i++) {
      menuItem.push(items[i].brand);
    }
    return [...new Set(menuItem)];
  }
}
