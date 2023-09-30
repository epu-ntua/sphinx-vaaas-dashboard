import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'toInt'
})
export class ToIntPipe implements PipeTransform {

  transform(value: any, ...args: any[]): number {
    // console.log(value);
    if (typeof (value) == 'number') {
      return parseFloat(value.toFixed(1))
    } else if (typeof (value) == 'string') {
      return parseFloat(parseFloat(value).toFixed(1));
    } else {
      return 0;
    }
  }

}
