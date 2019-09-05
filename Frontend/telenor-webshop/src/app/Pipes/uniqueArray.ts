import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'uniqueArray' })
export class PipeService implements PipeTransform {

    transform(value: any):any {
        let uniqueArray = value.filter(function(el, index, array) {
            return array.indexOf(el) == index;
        });
        return uniqueArray;
    }
}