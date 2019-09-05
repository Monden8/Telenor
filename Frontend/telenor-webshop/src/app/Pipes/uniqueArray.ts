import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'uniqueArray' })
export class PipeService implements PipeTransform {
      transform(items: Array<any>, category: string): Array<any> {
        return items.filter(item => item.category === category);
    }
}