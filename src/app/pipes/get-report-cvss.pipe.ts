import {Pipe, PipeTransform} from '@angular/core';
import {from} from 'rxjs';
import {TasksService} from '../services/tasks.service';

@Pipe({
  name: 'getReportCvss'
})
export class GetReportCvssPipe implements PipeTransform {
  constructor(private taskService: TasksService) {
  }

  transform(value: any, ...args: unknown[]): any {
    if (value !== undefined && value != null) {
      // console.log(value)
      // console.log(Object.keys(value)[0]);
      let report_keys: any[] = Object.keys(value);
      // console.log(value.reports);
      // let temp_report_keys: number[] = Object.keys(value.reports).map(i => Number(i));
      let latest_report = Math.max(...report_keys);
      // return from(this.taskService.getTaskReportInStix(value.reports[latest_report.toString()]));
      return (latest_report != null && value[latest_report]) ? value[latest_report].cvss_score : 'n/a';
      // return 'n/a';
    } else {
      return 'n/a';
    }
  }

}
