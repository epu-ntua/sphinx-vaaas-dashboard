import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenubarService {
  menuitems = [];
  constructor() {
    this.menuitems = [
      {label: 'Home', value: '', URL: '/home', icon: 'home', styleClass: 'active', tooltip: ''},
      {label: 'Assets', value: '', URL: '/assets', icon:'global', styleClass: '', tooltip: '' },
      {label: 'Tasks', value: '', URL: '/tasks', icon: 'security-scan', styleClass: '', tooltip: ''},
      {label: 'CVEs', value: '', URL: '/cves', icon: 'database', styleClass: '', tooltip: ''},
      // {label: 'Entities', value: '', URL: '/entities', icon: 'node-index', styleClass: '', tooltip: ''},
      // {label: 'Extra', value: '', URL: '/extra', icon: 'plus-square', styleClass: '', tooltip: ''},
    ];
  }
}
