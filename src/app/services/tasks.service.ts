import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {NewTask} from '../models/new-task.model';
import {ErrorReportingService} from './error-reporting.service';
import {VaaasError} from '../models/vaaas-error.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  base_url = `${environment.PROTOCOL}${environment.API_BASE_URL}${environment.API_PORT}${environment.VAAAS_URL_PREFIX}`;
  logic_url = `${environment.PROTOCOL}${environment.API_BASE_URL}${environment.API_PORT}${environment.LOGIC_URL_PREFIX}`;

  // base_url = `${environment.PROTOCOL}${environment.VAAAS_API_BASE_URL}`;

  constructor(private http: HttpClient, private errorReportingService: ErrorReportingService) {

  }

// //  creates a new task/scan
//   createTask(new_task: NewTask) {
//     return this.http.post(this.base_url + '/tasks', new_task)
//       .toPromise()
//       .catch((error) => {
//         this.errorReportingService.displayError(error);
//         console.error(error);
//       });
//   }

  getTasks() {
    return this.http.get(this.base_url + '/tasks')
      .toPromise()
      .catch((error) => {
        this.errorReportingService.displayError(error);
        console.error(error);
      });
  }

  startTask(task_name: string, task_ip: string, task_speed: number, script: string) {
    return this.http.post(this.base_url + '/tasks/start', {'name': task_name, 'target': task_ip, 'speed': task_speed, 'script': script})
      .toPromise()
      .catch((error) => {
        this.errorReportingService.displayError(error);
        console.error(error);
      });
  }

  restartTask(task_name: string, task_ip: string, task_speed: number) {
    return this.http.post(this.base_url + '/tasks/start', {'name': task_name, 'target': task_ip, 'speed': task_speed})
      .toPromise()
      .catch((error) => {
        this.errorReportingService.displayError(error);
        console.error(error);
      });
  }

  getTaskReportInStix(report_json: any) {
    return this.http.post(this.base_url + '/reports/stix', {'report': report_json})
      .toPromise()
      .catch((error) => {
        this.errorReportingService.displayError(error);
        console.error(error);
      });
  }

  delete_Task(task_name: string, task_ip?: string) {
    return this.http.delete(this.base_url + '/tasks/' + task_name)
      .toPromise()
      .catch((error) => {
        this.errorReportingService.displayError(error);
        console.error(error);
      });
  }

  scan_allTargets() {
    return this.http.get(this.logic_url + '/scans')
      .toPromise()
      .catch((error) => {
        this.errorReportingService.displayError(error);
        console.error(error);
      });
  }

  //
  // startTask(task_id: string) {
  //   return this.http.get(this.base_url + '/tasks/' + task_id + '/start')
  //     .toPromise()
  //     .catch((error) => {
  //       this.errorReportingService.displayError(error);
  //       console.error(error);
  //     });
  // }
  //
  // deleteTask(task_id: string) {
  //   return this.http.delete(this.base_url + '/tasks/' + task_id)
  //     .toPromise()
  //     .catch((error) => {
  //       this.errorReportingService.displayError(error);
  //       console.error(error);
  //     });
  // }
  //
  // stopTask(task_id: string) {
  //   return this.http.get(this.base_url + '/tasks/' + task_id + '/stop')
  //     .toPromise()
  //     .catch((error) => {
  //       this.errorReportingService.displayError(error);
  //       console.error(error);
  //     });
  // }
  //
  // getTaskProgress(task_id: string) {
  //   return this.http.get(this.base_url + '/tasks/' + task_id + '/progress')
  //     .toPromise()
  //     .catch((error:VaaasError) => {
  //       // this.errorReportingService.displayError(error);
  //     });
  // }


}
