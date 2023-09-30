export class NewTask {
  // constructor() {
  //   this.name='';
  //   this.target_id='';
  //   this.scanner_id='';
  //   this.config_id='';
  // }
  id:string;
  name: string;
  config_id: string;
  target_id: string;
  scanner_id: string;
  alterable: any;
  hosts_ordering: any;
  schedule_id: string;
  alerts_id: string;
  comment: string;
  schedule_periods: any;
  observers: any;
  preferences: any;
}
