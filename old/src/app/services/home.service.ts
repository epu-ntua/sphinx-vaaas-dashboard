import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  homeItems = [];

  constructor() {
    this.homeItems = [
      {label: 'Network', value: '', icon: 'global', tooltip: ''},
      {label: 'Assessed', value: '', icon: 'check', tooltip: ''},
      {label: 'Waiting', value: '', icon: 'loading', tooltip: ''},
      {label: 'Alerts', value: '', icon: 'alert', tooltip: ''}
    ];
  }
}
// <i nz-icon nzType="global" nzTheme="outline"></i>
// <i nz-icon nzType="check" nzTheme="outline"></i>
//   <i nz-icon nzType="loading" nzTheme="outline"></i>
//   <i nz-icon nzType="alert" nzTheme="outline"></i>
