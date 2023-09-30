import { Component, OnInit } from '@angular/core';
import {en_US, NzI18nService} from 'ng-zorro-antd';
interface Devices {
  IP: string;
  hostname: string;
  OS: string;
  severity: number;
  modified: string;
  id: string;
  MAC: string;
}

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss']
})
export class EntitiesComponent implements OnInit {
  i = 0;
  listOfData: Devices[] = [
    {
      IP: '10.0.1.1',
      MAC: 'E8:FC:AF:B9:BE:A2',
      hostname: 'vane',
      OS: 'Win10',
      severity: 10,
      modified: '28/05/20',
      id: `${this.i}`,
      },
    {
      IP: '10.0.1.2',
      MAC: 'D8:FC:FA:FF:BE:B2',
      hostname: 'skep',
      OS: 'MacOS',
      severity: 99,
      modified: '10/05/20',
      id: `${this.i}`,
    },
    {
      IP: '10.0.2.32',
      MAC: 'BB:BB:AH:BF:BE:A2',
      hostname: 'nick',
      OS: 'freebsd',
      severity: 70,
      modified: '18/05/20',
      id: `${this.i}`,
    },
    {
      IP: '10.0.3.11',
      MAC: 'E8:CA:FB:BC:BE:A2',
      hostname: 'smajda',
      OS: 'debian',
      severity: 40,
      modified: '27/05/20',
      id: `${this.i}`,
    },
    {
      IP: '10.0.21.21',
      MAC: 'E8:FC:A9:BA:EF:AE',
      hostname: 'athel',
      OS: 'Win10',
      severity: 83,
      modified: '6/05/20',
      id: `${this.i}`,
    },
    {
      IP: '10.0.16.63',
      MAC: 'CE:FB:A3:A9:BE:A2',
      hostname: 'workpc1',
      OS: 'Win10',
      severity: 50,
      modified: '21/05/20',
      id: `${this.i}`,
    },
    {
      IP: '10.0.14.23',
      MAC: 'EF:CE:BF:B9:BB:A2',
      hostname: 'laptopskep',
      OS: 'Win10',
      severity: 84,
      modified: '15/05/20',
      id: `${this.i}`,
    },
    {
      IP: '10.0.6.23',
      MAC: 'E8:FC:BB:CA:9E:A5',
      hostname: 'har',
      OS: 'MacOS',
      severity: 23,
      modified: '13/05/20',
      id: `${this.i}`,
    },
    {
      IP: '10.0.1.1',
      MAC: 'E8:FC:AF:B9:BE:A2',
      hostname: 'vane',
      OS: 'Win10',
      severity: 1,
      modified: '21/05/20',
      id: `${this.i}`,
    },
    {
      IP: '10.0.1.1',
      MAC: 'E8:FC:AF:B9:BE:A2',
      hostname: 'vane',
      OS: 'Win10',
      severity: 1,
      modified: '28/05/20',
      id: `${this.i}`,
    },
    {
      IP: '10.0.1.1',
      MAC: 'E8:FC:AF:B9:BE:A2',
      hostname: 'vane',
      OS: 'Win10',
      severity: 1,
      modified: '28/05/20',
      id: `${this.i}`,
    },
    {
      IP: '10.0.1.1',
      MAC: 'E8:FC:AF:B9:BE:A2',
      hostname: 'vane',
      OS: 'Win10',
      severity: 1,
      modified: '28/05/20',
      id: `${this.i}`,
    },
    {
      IP: '10.0.1.1',
      MAC: 'E8:FC:AF:B9:BE:A2',
      hostname: 'vane',
      OS: 'Win10',
      severity: 1,
      modified: '28/05/20',
      id: `${this.i}`,
    },
    {
      IP: '10.0.1.1',
      MAC: 'E8:FC:AF:B9:BE:A2',
      hostname: 'vane',
      OS: 'Win10',
      severity: 1,
      modified: '28/05/20',
      id: `${this.i}`,
    },
    {
      IP: '10.0.1.1',
      MAC: 'E8:FC:AF:B9:BE:A2',
      hostname: 'vane',
      OS: 'Win10',
      severity: 1,
      modified: '28/05/20',
      id: `${this.i}`,
    },
    {
      IP: '10.0.1.1',
      MAC: 'E8:FC:AF:B9:BE:A2',
      hostname: 'vane',
      OS: 'Win10',
      severity: 1,
      modified: '28/05/20',
      id: `${this.i}`,
    },
  ];

  listOfDisplayData = [...this.listOfData];
  // isEnglish = true;
  constructor(private i18n: NzI18nService) { }
  // deleteRow(id: string): void {
  //   this.listOfData = this.listOfData.filter(d => d.id !== id);
  // }
  deleteRow(id){
    for(let i = 0; i < this.listOfData.length; ++i){
      if (this.listOfData[i].id === id) {
        this.listOfData.splice(i,1);
      }
    }
  }
  changeLanguage(): void {
    this.i18n.setLocale(en_US);
    // this.isEnglish = !this.isEnglish;
  }
  ngOnInit(): void {
    this.changeLanguage();
  }
//    deleteRow(id: string): void {
//
//      this.listOfData = this.listOfData.filter(d => d.IP !== ip);
//    }
 }
