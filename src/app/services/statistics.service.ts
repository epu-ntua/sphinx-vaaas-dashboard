import {Injectable} from '@angular/core';
import {Task2} from '../models/task2.model';
import {Asset2} from '../models/asset2.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  vendorsDictionary = [];
  CVSSScoresDictionary = [];

  constructor() {
  }

  getVendorsFromAssets(all_assets: Asset2[]) {
    this.vendorsDictionary = [];
    let temp = {};
    for (let a of all_assets) {
      if (!(a.vendor === undefined)) {
        if (temp[a.vendor]) {
          temp[a.vendor] += 1;
        } else {
          temp[a.vendor] = 1;
        }
      } else {

        // if (temp["Other"]) {
        //   temp["Other"] += 1;
        // } else {
        //   temp["Other"] = 1;
        // }
      }
    }
    Object.keys(temp).forEach(v => {
      // console.log(v)
      this.vendorsDictionary.push({name: v, value: temp[v]});
    });
    // console.log(this.vendorsDictionary);
    return this.vendorsDictionary;
  }

  getVulnerabilitiesFromReports(_reports: any[]) {
    this.CVSSScoresDictionary = [];
    // console.log(_reports);
    let temp = [];
    let t_series = [];
    if (_reports != undefined && _reports.length > 0) {
      _reports.forEach(r => {
        // console.log(r);
        let ind = {'name': r['task_name'], 'series': []};
        let _host = temp.find(h => h['name'] == r['task_name']);
        if (_host === undefined) {
          temp.push(ind);
        }
      });
      _reports.forEach(r => {
        // console.log(r);
        let vuln_no = 0;
        let _host = temp.find(h => h['name'] == r['task_name']);
        r['objects'].forEach(o => {
          if (!(_host === undefined)) {
            // console.log(o)
            if (o['type'] == 'x-discovered-service') {
              if (!(o['scripts_list'] === undefined)) {
                o['scripts_list'].forEach(sc => {
                  // console.log(sc);
                  // if ((sc['id'] == 'vulscan') || (sc['id'] == 'vulners')) {
                  if ((sc['id'] == 'vulners')) {
                    vuln_no += sc['output'].length - 1;
                  }
                });
              }
            }
          }
        });
        _host['series'].push({'name': moment(r['assessment_date']).format('DD/MM/YY'), 'value': vuln_no});
      });
    }

    // console.log(temp);
    return temp;
  }

  getAlerts(_reports: any[]) {
    // console.log(_reports);
    let temp = 0;
    if (_reports) {
      _reports.forEach(r => {
        if (r['cvss_score'] > 5) {
          temp += 1;
        }
      });
      return temp;
    }
  }
}
