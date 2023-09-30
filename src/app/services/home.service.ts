import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  homeItems = [];

  constructor() {
    this.homeItems = [
      {label: 'Network : ', value: '0', icon: 'global', tooltip: 'Network Assets'},
      {label: 'Assessed : ', value: '0', icon: 'check', tooltip: 'Total Assessed Entities'},
      {label: 'Reports : ', value: '0', icon: 'bar-chart', tooltip: 'Total Assessment Reports'},
      {label: 'Alerts : ', value: '0', icon: 'exclamation-circle', tooltip: 'Assessment Scores above 5.0 (CVSS)'}
    ];
  }
}
// <i nz-icon nzType="exclamation-circle" nzTheme="outline"></i>
