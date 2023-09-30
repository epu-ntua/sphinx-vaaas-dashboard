import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NvdService {
  nvd_url = 'https://services.nvd.nist.gov/rest/json/cves/1.0';
  request_headers = new HttpHeaders()
    .append('Content Type', 'application/json');
  request_params = new HttpParams();

  constructor(private http: HttpClient) {
  }

  // getNVDs(startIndex = 0, resultsPerPage = 10, keyword = '', isExactMatch = false) {
  // getNVDs(startIndex = 0, resultsPerPage = 10) {
  getNVDs(startIndex = 0,resultsPerPage = 1000, pubStartDate = '2018-01-01') {
    // return this.http.get(this.nvd_url, {headers: this.request_headers, params: this.request_params})

    return this.http.get(this.nvd_url, {params: this.request_params})
      .toPromise();
  }
}
