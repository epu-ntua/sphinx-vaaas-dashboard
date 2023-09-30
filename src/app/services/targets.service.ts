import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

import {NewTarget} from '../models/new-target.model';
import {ErrorReportingService} from './error-reporting.service';

@Injectable({
  providedIn: 'root'
})
export class TargetsService {
  base_url = `${environment.PROTOCOL}${environment.API_BASE_URL}${environment.API_PORT}${environment.VAAAS_URL_PREFIX}`;
  // base_url = `${environment.PROTOCOL}${environment.VAAAS_API_BASE_URL}`;

  constructor(private http: HttpClient, private errorReportingService: ErrorReportingService) {
  }

  getTargets() {
    return this.http.get(this.base_url + '/targets')
      .toPromise()
      .catch((error) => {
        console.error(error);
      });
  }

  createTarget(new_target: NewTarget) {
    return this.http.post(this.base_url + '/targets', new_target)
      .toPromise()
      .catch((error) => {
        this.errorReportingService.displayError(error);
        console.error(error);
      });
  }

  deleteTarget(target_id: string) {
    // console.log(target_id);
    return this.http.delete(this.base_url + '/targets/' + target_id)
      .toPromise()
      .catch((error) => {
        this.errorReportingService.displayError(error);
        console.error(error);
      });
  }
}
