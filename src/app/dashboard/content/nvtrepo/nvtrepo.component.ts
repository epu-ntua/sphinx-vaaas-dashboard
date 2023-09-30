import {Component, OnInit} from '@angular/core';
import {NvdService} from '../../../services/nvd.service';
import {Cve} from '../../../models/cve.model';
import {en_US, log, NzDatePickerModule, NzI18nService, zh_CN} from 'ng-zorro-antd';

interface cve_response {
  result: {
    CVE_Items: Cve[],
    CVE_data_format: string,
    CVE_data_timestamp: string,
    CVE_data_type: string,
    CVE_data_version: string
  };
  resultsPerPage: number;
  startIndex: number;
  totalResults: number;
}

@Component({
  selector: 'app-nvtrepo',
  templateUrl: './nvtrepo.component.html',
  styleUrls: ['./nvtrepo.component.scss']
})
export class NvtrepoComponent implements OnInit {
  searchValue = '';
  visible = false;
  listOfData: Cve[] = [];
  loading = true;

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    // this.listOfDisplayData = this.listOfData.filter((item) => item.cve.indexOf(this.searchValue) !== -1);
  }

  constructor(private nvdService: NvdService, private i18n: NzI18nService,) {
  }

  ngOnInit(): void {
    this.changeLanguage();
    this.getAllNvds();
  }

  changeLanguage(): void {
    this.i18n.setLocale(en_US);
  }

  getAllNvds() {
    this.loading = true;
    this.nvdService.getNVDs()
      .then((resp: cve_response) => {
        this.loading = false;
        // console.log(resp);
        this.listOfData = [...resp.result.CVE_Items];
        // console.log(this.listOfData);
      })
      .catch(error => {
        this.loading = false;
      });
  }
}

