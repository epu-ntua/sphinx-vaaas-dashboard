import {Injectable} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {VaaasError} from '../models/vaaas-error.model';

@Injectable({
  providedIn: 'root'
})
export class ErrorReportingService {


  constructor(private messageService: NzMessageService) {
  }

  displayError(error: VaaasError) {
    if (error.error.items) {
      this.messageService.create('error', 'Error Code: ' + error.error.items['@status'] + ' \n Error Message: ' + error.error.items['@status_text']);
      console.error(error);
    }
  }

}
