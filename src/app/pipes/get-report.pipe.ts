import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getReport'
})
export class GetReportPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
