import {Pipe, PipeTransform} from '@angular/core';
import {Task2} from '../models/task2.model';

@Pipe({
  name: 'getReportsIDs'
})
export class GetReportsIDsPipe implements PipeTransform {

  transform(_task: Task2, ...args: any[]): any {
    let temp = [];
    // let keys = Object.keys(value.reports);
    for (const [key, value] of Object.entries(_task.reports)) {
      // console.log(`${key}: ${value}`);
      temp.push({label: key, value: value});
    }
    return temp;
  }
}
