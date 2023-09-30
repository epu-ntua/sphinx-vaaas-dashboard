import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrorReportingService} from './error-reporting.service';
import {environment} from '../../environments/environment';
import {Asset2} from '../models/asset2.model';

@Injectable({
  providedIn: 'root'
})
export class AssestsService {
  base_url = `${environment.PROTOCOL}${environment.API_BASE_URL}${environment.API_PORT}${environment.ASSETS_URL_PREFIX}`;
  asset_url = `${environment.PROTOCOL}${environment.API_BASE_URL}${environment.API_PORT}${environment.ASSETS_URL_PREFIX}`;


  constructor(private http: HttpClient, private errorReportingService: ErrorReportingService) {
  }

  get_assets() {
    console.log(this.base_url);
    return this.http.get(this.base_url + '/assets')
      .toPromise()
      .catch((error) => {
        console.error(error);
      });
  }

  update_Asset(editedAsset: Asset2) {
    return this.http.put(this.base_url + '/assets/' + editedAsset._id['$oid'], editedAsset)
      .toPromise()
      .catch((error) => {
        console.error(error);
      });
  }

  create_Asset(new_asset: Asset2) {
    return this.http.post(this.base_url + '/assets', new_asset)
      .toPromise()
      .catch((error) => {
        console.error(error);
      });
  }

  delete_Asset(asset_to_delete: Asset2) {
    return this.http.delete(this.base_url + '/assets/' + asset_to_delete._id['$oid'])
      .toPromise()
      .catch((error) => {
        console.error(error);
      });
  }

  discoverAllAssets() {
    return this.http.get(this.asset_url + '/assets/scan')
      .toPromise()
      .catch((error) => {
        console.error(error);
      });
  }


}
