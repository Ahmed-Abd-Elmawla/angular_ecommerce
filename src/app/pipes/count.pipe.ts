import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value==0 ? "Out of stock" : "In stock";
  }

}
