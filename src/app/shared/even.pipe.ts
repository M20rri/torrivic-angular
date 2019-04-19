import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'even',
  pure : false
})
export class EvenPipe implements PipeTransform {

  transform(value: Array<number>): any {
    return value.filter(a => a % 2 == 0);
  }

}