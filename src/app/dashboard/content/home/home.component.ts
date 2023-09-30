import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HomeService} from '../../../services/home.service';
import {AssestsService} from '../../../services/assests.service';
import {Asset2} from '../../../models/asset2.model';
import {Task2} from '../../../models/task2.model';
import {TasksService} from '../../../services/tasks.service';
import {Reports2Service} from '../../../services/reports2.service';
import {NgxChartsModule} from '@swimlane/ngx-charts';
// import {single} from './data';
// import {multi} from './data';
import {StatisticsService} from '../../../services/statistics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewChecked {
  homeItems: any [] = [];
  assets: Asset2[] = [];
  tasks: Task2[] = [];
  reports: any[] = [];
  reportsStix: any[] = [];
  tree_chart_data: any[] = [];
  // tree_chart_data: any[] = [];
  // single: any[];
  // view: any[] = [300, 300];
  // options
  gradient: boolean = false;
  animations: boolean = true;
  // Line Chart Options
  // options
  legend: boolean = false;
  showLabels: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = 'Vulnerabilities';
  timeline: boolean = false;
  // multi: any[] = [{'name': '1.1.1.1', 'series': [{'value': 1, 'name': '2016-09-13T20:35:21.347Z'}]}];
  multi: any[] = [];
  colorScheme = {
    // domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
    domain: ['#54a498', '#aae3f5']
  };

  constructor(private homeService: HomeService, private assetService: AssestsService,
              private taskService: TasksService, private reportsService: Reports2Service,
              private statisticsService: StatisticsService,
              private cdref: ChangeDetectorRef) {
    this.homeItems = this.homeService.homeItems;
    this.tree_chart_data = [{name: 'N/A', value: 1}];
    // Object.assign(this, {single});
    // Object.assign(this, {multi});
    // this.getAssets();
    // this.getTasks();

  }

  async ngOnInit(): Promise<void> {
    let _assets_proc = await this.getAssets();
    let _vendors_proc = await this.getVendors(this.assets);
    let _tasks_proc = await this.getTasks();
    let _reports_proc = await this.getAllReports(this.tasks);
    this.multi = this.statisticsService.getVulnerabilitiesFromReports(this.reports);
    // console.log(this.multi);

  }


  labelFormatting(l) {
    // console.log(c)
    // return `${(c.label)} Population`;
    return `<span style="font-size: 1pt!important;">${(l.label)}</span>`;
    // return `<!--${l.label}<br/><span class="tree-label"></span>-->`;
  }

  valueFormatting(v) {
    return `<div style="font-size: 1pt!important;">${(v.value)}</div>`;
  }

  onSelect(event) {
    console.log(event);
  }

  async getVendors(_assets: Asset2[]) {
    this.tree_chart_data = [];
    this.tree_chart_data = [...this.statisticsService.getVendorsFromAssets(_assets)];
    this.tree_chart_data.forEach((item: any) => {
      if (!item.name) {
        this.tree_chart_data.splice(this.tree_chart_data.indexOf(item), 1);
        // console.log(item.name);
      }
    });

    // console.log(this.tree_chart_data);
    return this.tree_chart_data;
  }


  async getAssets() {
    await this.assetService.get_assets()
      .then(resp => {
        this.assets = [];
        // console.log(resp);
        this.assets = (resp && resp['items']) ? resp['items'] : [];
        this.homeItems[0].value = this.assets.length;
      });
  }

  async getTasks() {
    await this.taskService.getTasks()
      .then(resp => {
        this.tasks = [];
        if (resp && resp['items']) {
          let _tasks = resp['items']['tasks'][0];
          for (let i in _tasks) {
            if (_tasks.hasOwnProperty(i)) {
              // console.log(i);
              // console.log(_tasks[i]);
              this.tasks.push(_tasks[i]);
            }
          }
          this.homeItems[1].value = this.tasks.length;
          // console.log(resp);
          // this.getAllReports(this.tasks);
        }
      });
  }

  async getAllReports(_tasks: Task2[]) {
    await this.reportsService.getAllReports()
      .then((resp) => {
        // console.log(resp);
        this.homeItems[2].value = resp['items']['reports'] ? resp['items']['reports'].length : 0;
        this.homeItems[3].value = resp['items']['reports'] ? this.statisticsService.getAlerts(resp['items']['reports']) : '0';
        resp['items']['reports'] ? this.reports = resp['items']['reports'] : [];
      });
  }

  ngAfterViewChecked(): void {
    this.cdref.detectChanges();
  }


}
