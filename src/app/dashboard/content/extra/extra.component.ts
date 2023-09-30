import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {en_US, NzDatePickerModule, NzI18nService, zh_CN} from 'ng-zorro-antd';
import getISOWeek from 'date-fns/getISOWeek';
import {ListItem} from '../../../models/list-item.model';
import {ApiResponse} from '../../../models/api-response.model';
import {NewTask} from '../../../models/new-task.model';
import {TasksService} from '../../../services/tasks.service';
import {Router} from '@angular/router';
import {TargetsService} from '../../../services/targets.service';
import {NewTarget} from '../../../models/new-target.model';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent implements OnInit {
  size: 'large' | 'small' | 'default' = 'large';
  date = null;
  portListItems: ListItem[] = [];
  dateRange = [];
  isEnglish = true;
  targetListItems: ListItem[] = [];
  scannerListItems: ListItem[] = [];
  new_target: NewTarget = new NewTarget();
  profileListItems: ListItem[] = [];
  createVisible = false;
  new_task: NewTask = new NewTask();

  constructor(private i18n: NzI18nService, private taskService: TasksService, public router: Router, private targetsService: TargetsService) {
  }


  // onChange(result: Date): void {
  //   console.log('onChange: ', result);
  // }
  //
  // getWeek(result: Date): void {
  //   console.log('week: ', getISOWeek(result));
  // }
  //
  // onOk(result: Date): void {
  //   console.log('onOk', result);
  // }
  //
  // changeLanguage(): void {
  //   this.i18n.setLocale(en_US);
  //   // this.isEnglish = !this.isEnglish;
  // }
  //
  // checked = true;
  //
  // Change(): void {
  //   this.checked = !this.checked;
  // }
  //
  //
  ngOnInit(): void {
  //   this.changeLanguage();
  //   this._getTargets();
  //   this._getScanners();
  //   this._getProfiles();
  //   this._getPorts();
  }
  //
  // _getTargets() {
  //   this.targetsService.getTargets()
  //     .then((resp: ApiResponse) => {
  //       if (resp.items['target_count']['filtered'] > 1) {
  //         resp.items['target'].forEach((item) => {
  //           this.targetListItems.push({label: item['name'], value: item['@id']});
  //         });
  //       } else if (resp.items['target_count']['filtered'] != 0) {
  //         console.log('one target');
  //         this.targetListItems.push({label: resp.items['target']['name'], value: resp.items['target']['@id']});
  //       } else {
  //         console.log('no targets');
  //       }
  //       console.log(this.targetListItems);
  //
  //
  //     });
  //   // .catch((error: any) => {
  //   //   console.error(error)
  //   // })
  // }
  //
  // _showTargetModal() {
  //   this.createVisible = true;
  // }
  //
  // handleOk(): void {
  //   this._createTargets();
  // }
  //
  // handleCancel(): void {
  //   console.log('cancel');
  //   this.createVisible = false;
  // }
  //
  // _createTargets() {
  //   this.targetsService.createTarget(this.new_target)
  //     .then((resp: any) => {
  //       console.log(resp);
  //       this.createVisible = false;
  //     });
  // }
  //
  // _getPorts() {
  //   this.portService.getPortProfiles()
  //     .then((resp: ApiResponse) => {
  //       if (resp.items['port_list_count']['filtered'] != '0') {
  //         resp.items['port_list'].forEach((item) => {
  //           this.portListItems.push({label: item['name'], value: item['@id']});
  //         });
  //       }
  //       console.log(this.portListItems);
  //     });
  // }
  //
  // _getScanners() {
  //   this.scanService.getScanners()
  //     .then((resp: ApiResponse) => {
  //       if (resp.items['scanner_count']['filtered'] != '0') {
  //         resp.items['scanner'].forEach((item) => {
  //           this.scannerListItems.push({label: item['name'], value: item['@id']});
  //         });
  //       }
  //       console.log(this.scannerListItems);
  //     });
  // }
  //
  //
  // _getProfiles() {
  //   this.scanService.getScanProfiles()
  //     .then((resp: ApiResponse) => {
  //       if (resp.items['config_count']['filtered'] != '0') {
  //         resp.items['config'].forEach((item) => {
  //           this.profileListItems.push({label: item['name'], value: item['@id']});
  //         });
  //       }
  //       console.log(this.profileListItems);
  //     });
  // }
  //
  // _createTask() {
  //   this.taskService.createTask(this.new_task)
  //     .then(() => {
  //       this.router.navigate(['/scans']);
  //     });
  //
  //   console.log(this.new_task);
  // }
}
