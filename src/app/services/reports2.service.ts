import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ErrorReportingService} from './error-reporting.service';
import {StatisticsService} from './statistics.service';

@Injectable({
  providedIn: 'root'
})
export class Reports2Service {
  base_url = `${environment.PROTOCOL}${environment.API_BASE_URL}${environment.API_PORT}${environment.VAAAS_URL_PREFIX}`;

  constructor(private http: HttpClient, private errorReportingService: ErrorReportingService) {
  }

  getTaskReports(target: string) {
    return this.http.post(this.base_url + '/reports', {'target': target})
      .toPromise()
      .catch((error) => {
        this.errorReportingService.displayError(error);
        console.error(error);
      });
  }

  getAllReports() {
    return this.http.get(this.base_url + '/reports')
      .toPromise()
      .catch((error) => {
        this.errorReportingService.displayError(error);
        console.error(error);
      });
  }
}
