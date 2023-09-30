import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {en_US, log, NzDatePickerModule, NzI18nService, zh_CN} from 'ng-zorro-antd';
import getISOWeek from 'date-fns/getISOWeek';
import {TasksService} from '../../../services/tasks.service';
import {ApiResponse} from '../../../models/api-response.model';
import {NzMessageService} from 'ng-zorro-antd';
import {NzMessageModule} from 'ng-zorro-antd';
import {NewTask} from '../../../models/new-task.model';
import {TargetsService} from '../../../services/targets.service';
import {ListItem} from '../../../models/list-item.model';
import * as jsPDF from 'jspdf';
import {Task2} from '../../../models/task2.model';
import {AssestsService} from '../../../services/assests.service';
import * as moment from 'moment';


@Component({
  selector: 'app-customscan',
  templateUrl: './customscan.component.html',
  styleUrls: ['./customscan.component.scss']
})
export class CustomscanComponent implements OnInit, AfterViewChecked {
  size: 'large' | 'small' | 'default' = 'large';
  taskList: Task2[] = [];
  searchString = '';
  showCreateTaskDialog: boolean = false;
  newTask: { name: string, target: string, speed: number, script: string } = {name: '', target: '', speed: 1, script: ''};
  assetsIPs = [];
  selectedReport: any;
  selectedReportStix: any;
  task_speed_matrix = [];
  loading: boolean = false;
  showVaaasReport: boolean = false;
  @ViewChild('VaaasReport', {static: false}) pdfTable: ElementRef;

  // displayedTaskList: Tasks[] = [];
  showCreateScan: boolean = false;
  // newScan: NewTask = new NewTask();
  targetListItems: ListItem[] = [];
  portListItems: ListItem[] = [];
  scanProfileListItems: ListItem[] = [];
  scannerListItems: ListItem[] = [];
  showDownloadReport: boolean = false;
  report_format_ids: ListItem[] = [];
  selectedReportFormat: string;
  scriptsListItems: ListItem[] = [];

  constructor(private i18n: NzI18nService, private taskService: TasksService, private messageService: NzMessageService, private assetsService: AssestsService,
              private cdref: ChangeDetectorRef) {
    this.task_speed_matrix = ['very slow', 'slow', 'medium', 'fast', 'very fast'];
    this.scriptsListItems = [
      {label: 'Vulnerabilities', value: ''},
      // {label: 'All', value: 'all'},
      {label: 'Default', value: 'default'},
      {label: 'Authentication', value: 'auth'},
      {label: 'Broadcast', value: 'broadcast'},
      {label: 'Brute Force', value: 'brute'},
      {label: 'Discovery', value: 'discovery'},
      {label: 'Dos', value: 'dos'},
      // {label: 'Exploit', value: 'exploit'},
      // {label: 'External', value: 'external'},
      {label: 'Fuzzer', value: 'fuzzer'},
      // {label: 'Intrusive', value: 'intrusive'},
      {label: 'Malware', value: 'malware'},
      // {label: 'Safe', value: 'safe'},
      {label: 'Version', value: 'version'},
      // {label: 'Vulnerabilities', value: 'vuln'},
      {label: 'Conficker', value: 'p2p-conficker,smb-os-discovery,smb-vuln-conficker'}
    ];
  }
  // --script-args=checkall=1,safe=1


  ngOnInit(): void {
    this.changeLanguage();
    this._getTasks();
    this.getAssets();
    // this._getPorts();
    // this._getTargets();
    // this._getScanners();
    // this._getScanProfiles();
    // this._getReport_Formats();
  }

  getAssets() {
    this.assetsIPs = [];
    this.assetsService.get_assets()
      .then(resp => {

        this.assetsIPs = resp['items'].map(a => {
          return a.ip;
        });
        // console.log(this.assetsIPs);
      });
  }

  search(): void {
    // this.visible = false;
    // this.displayedTaskList = this.taskList.filter((item) => item.name.indexOf(this.searchString) !== -1);
    this.taskList = this.taskList.filter(a => JSON.stringify(a).indexOf(this.searchString) !== -1);
// this.taskssList = this.tasksList.filter(a => JSON.stringify(a).indexOf(this.searchString) !== -1);
  }

  reset(): void {
    // this.displayedTaskList = this.taskList;
    this.searchString = '';
    this._getTasks();
    // this.search();
  }

  changeLanguage(): void {
    this.i18n.setLocale(en_US);
  }

  _getTasks() {
    this.loading = true;
    this.taskService.getTasks()
      .then(resp => {
        console.log(resp);
        this.loading = false;
        this.taskList = [];
        let _tasks = resp['items']['tasks'][0];
        for (let i in _tasks) {
          if (_tasks.hasOwnProperty(i)) {
            // console.log(i);
            // console.log(_tasks[i]);
            this.taskList.push(_tasks[i]);
          }
        }
        // console.log(temp[0].processes['ARP Ping Scan'].progress);
        // console.log(this.taskList);
      })
      .catch(error => {
        this.loading = false;
      });
  }

  showCreateTaskModal() {
    this.showCreateTaskDialog = true;
  }

  hideCreateTargetModal() {
    this.newTask = {name: '', target: '', speed: 1, script: ''};
    this.showCreateTaskDialog = false;
  }

  createNewTask(_new_task: { name: string, target: string, speed: number, script }) {
    this.taskService.startTask(_new_task.name, _new_task.target, _new_task.speed, _new_task.script)
      .then(resp => {
        if (resp['result'] == 'SCAN_NETWORK_STARTED') {
          this.messageService.create('info', resp['result'] + ' : ' + resp['more']);
        } else {
          this.messageService.create('error', resp['result'] + ' : ' + resp['more']);
        }
        this.hideCreateTargetModal();
        this._getTasks();
      });
  }

  restartTask(_task: Task2) {
    // console.log(_task);
    let rep_keys = Object.keys(_task.reports);
    if (rep_keys.length > 0) {
      let task_ip = _task.reports[rep_keys[0]]['__NmapReport__']['_hosts'][0]['__NmapHost__']['_ipv4_addr'];
      //
      this.taskService.restartTask(_task.name, task_ip, 1)
        .then(resp => {
          // console.log(resp);
          if (resp['result'] == 'SCAN_NETWORK_STARTED') {
            this.messageService.create('info', resp['result'] + ' : ' + resp['more']);
          } else {
            this.messageService.create('error', resp['result'] + ' : ' + resp['more']);
          }
          this._getTasks();
        });
    }
  }

  _startTask(task_id) {
    // console.log(task_id);
    // this.taskService.startTask(task_id)
    //   .then(() => {
    //     this.message.success('Scan started successfully', {
    //       nzDuration: 10000
    //     });
    //     this._getTasks();
    //   });
  }

  _deleteTask(task_name: string) {
    this.taskService.delete_Task(task_name)
      .then(resp => {
        console.log(resp);
        this._getTasks();
      });
  }

  _stopTask(task_id) {
    // console.log(task_id);
    // this.taskService.stopTask(task_id)
    //   .then(() => {
    //     this.message.info('Task stopped successfully', {
    //       nzDuration: 10000
    //     });
    //     this._getTasks();
    //   });
  }

  // _getTaskProgress(_data) {
  // console.log(_data);
  // this.taskService.getTaskProgress(_data.id)
  //   .then((resp: any) => {
  //     console.log(resp);
  //   });

  // }

  cancelDelete() {
  }

  cancelNewScan(form: any) {
    // this.showCreateScan = false;
    // form.reset();
  }

  createNewScan(form: any) {
    // this._createTask(form);
  }

  _getTargets() {
    // this.targetsService.getTargets()
    //   .then((resp: ApiResponse) => {
    //     if (resp !== undefined && resp.items['target_count']['filtered'] > 1) {
    //       resp.items['target'].forEach((item) => {
    //         this.targetListItems.push({label: item['name'], value: item['@id']});
    //       });
    //     } else if (resp !== undefined && resp.items['target_count']['filtered'] != 0) {
    //       console.log('one target');
    //       this.targetListItems.push({label: resp.items['target']['name'], value: resp.items['target']['@id']});
    //     } else {
    //       console.log('no targets');
    //     }
    // console.log(this.targetListItems);


    // });
    // .catch((error: any) => {
    //   console.error(error)
    // })
  }


  _createTask(form: any) {
    // this.taskService.createTask(this.newScan)
    //   .then((resp: ApiResponse) => {
    //     console.log(resp);
    // form.reset();
    // this._getTasks();
    // this.showCreateScan = false;
    // });

  }

  showDownloadReportModal(selected_scan) {
    // console.log(selected_scan);
    // this.selectedReport = selected_scan['latest_report_id'];
    // this.showDownloadReport = true;
  }

  downloadReport(report: any) {
    console.log(report);
    // console.log(this.selectedReportFormat);
    // let pdf = jsPDF('l', 'mm', [288, 288]);
    // this.reportsService.getReportDetails(this.selectedReport, this.selectedReportFormat, 1)
    //   .then((resp: ApiResponse) => {
    //     console.log(resp);
    //     if (resp.items['report']['report_format']['name'] == 'PDF') {
    //       console.log('PDF');
    //       this.savePDF(resp.items['report']['#text']);
    //     } else if (resp.items['report']['report_format']['name'] == 'XML') {
    //       console.log('XML');
    //       this.saveXML(resp.items['report']['#text']);
    //     }
    //     form.reset();
    //     this.showDownloadReport = false;
    //   });


    // this.drawerVisible = true;
    // console.log(data);
    // console.log(this.taskList);
  }

  showVaaasReportDialog() {
    this.showVaaasReport = true;
    this._getReportInStix();
  }

  hideVaaasReportDialog() {
    this.loading = false;
    this.showVaaasReport = false;
    this.selectedReport = null;
    this.selectedReportStix = null;
  }

  cancelDownloadReport(form: any) {
    // this.showDownloadReport = false;
    // form.reset();

  }

  get_report_date(_date: any) {
    // let t = '1615991601';
    return moment(parseInt(_date) * 1000).format('DD/MM/YY hh:mm');
  }

  _getReport_Formats() {
    // this.reportsService.getReportFormats()
    //   .then((resp: ApiResponse) => {
    //       // console.log(resp);
    //       this.report_format_ids = resp.items['report_format'].map((item) => {
    //           return {label: item['name'], value: item['@id']};
    //         }
    //       );
    //       // console.log(this.report_format_ids);
    //     }
    //   );
  }

  _getReportInStix() {
    this.loading = true;
    console.log(this.selectedReport);
    this.selectedReportStix = this.selectedReport;
    // this.taskService.getTaskReportInStix(this.selectedReport)
    //   .then(resp => {
    //     console.log(resp);
    //     this.loading = false;
    //     this.selectedReportStix = resp ? resp['items']['report'] : [];
    //     console.log(resp);
    // })
    // .catch(error => {
    //   this.loading = false;
    // });
    // console.log(this.selectedReport);
  }

  savePDF(encoded_text: any) {
    const linkSource = 'data:application/pdf;base64,' + encoded_text + '\n';
    const downloadLink = document.createElement('a');
    const fileName = 'report.pdf';

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  saveXML(encoded_text: any) {
    const linkSource = 'data:application/xml;base64,' + encoded_text + '\n';
    const downloadLink = document.createElement('a');
    const fileName = 'report.xml';

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  getReportOutput(rep: any) {
    let temp = [];
    if (rep) {
      if (rep['id'] == 'vulners') {
        for (let i of rep['output']) {
          temp.push(i.trim().split('\t'));
        }
      }
      // else if (rep['id'] == 'vulscan') {
      //   for (let i of rep['output']) {
      //     temp.push(i.trim().split(']'));
      //   }
      // }
    }
    // console.log(temp);
    return temp;
  }

  public exportAsPDF(divId) {
    // let top_element = document.getElementById(divId);
    // let hidden_elements: HTMLCollectionOf<Element> = document.getElementsByClassName('hidden_el');
    let hidden_elements: NodeListOf<Element> = document.querySelectorAll('#hidden');
    for (let i of Array.from(hidden_elements)) {
      // i.setAttribute('display', 'none');
      i.parentNode.removeChild(i);
      // console.log(i);
    }

    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor': function(element, renderer) {
        return true;
      }
    };
    const pdfTable = this.pdfTable.nativeElement;

    doc.fromHTML(pdfTable.innerHTML, 5, 5, {
      width: 180,
      'elementHandlers': specialElementHandlers
    });

    doc.save(this.selectedReportStix.task_name + '.pdf');
  }

  getTdValue(elem: HTMLElement) {
    // console.log(elem.innerText);
    return Number(elem.innerText);
  }

  ngAfterViewChecked(): void {
    this.cdref.detectChanges();
  }

  get_json_2_string(objects: any) {
    return JSON.stringify(objects);
  }

  scan_all_targets() {
    this.taskService.scan_allTargets()
      .then((resp) => {
        console.log(resp);
      });
  }
}

