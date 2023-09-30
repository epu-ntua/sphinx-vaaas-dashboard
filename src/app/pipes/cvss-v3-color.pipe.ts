import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cvssV3Color'
})
export class CvssV3ColorPipe implements PipeTransform {

  transform(value: number | undefined, ...args: unknown[]): string {
    // console.log(value)
    let color: string = '';
    if (value) {
      if (value <= 3.9) {
        color = 'green';
      } else if ((value > 3.9) && (value <= 6.9)) {
        color = 'orange';
      } else if ((value > 6.9) && (value <= 8.9)) {
        color = 'orangered';
      } else if ((value > 8.9) && (value <= 10)) {
        color = 'darkred';
      } else {
        color = 'gray';
      }
    } else {
      color = 'gray';
    }
    return color;
  }


}
