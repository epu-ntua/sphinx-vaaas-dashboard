import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reportOut'
})
export class ReportOutPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let temp = [];
    if (value) {
      if (value['id'] == 'vulners') {
        for (let i of value['output']) {
          temp.push(i.trim().split('\t'));
        }
      }
    }
    console.log(temp);
    return null;
  }

}
