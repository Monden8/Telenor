import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "uniqueArray" })
export class PipeService implements PipeTransform {
  transform(items: Array<any>): Array<any> {
    let brand = [];
    for (let i: number = 0; i < items.length; i++) {
      brand.push(items[i].brand);
    }
    console.log(Object.values(items));
    return [...new Set(brand)];
    /*     return [...new Set(items.filter(item => item.brand === "Samsung"))];
  
 */
  }
}
