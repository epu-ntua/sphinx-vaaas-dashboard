import {Component, OnInit} from '@angular/core';
import {en_US, NzI18nService, NzModalModule} from 'ng-zorro-antd';
import {ApiResponse} from '../../../models/api-response.model';
import {ListItem} from '../../../models/list-item.model';
import {NewTarget} from '../../../models/new-target.model';
import {TargetsService} from '../../../services/targets.service';
import {AssestsService} from '../../../services/assests.service';
import {Asset2} from '../../../models/asset2.model';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.scss']
})
export class TargetsComponent implements OnInit {
  // portListItems: ListItem[] = [];
  searchString = '';
  showCreateAssetModal = false;
  assetsList: Asset2[] = [];
  new_asset: Asset2 = new Asset2();
  targetList: NewTarget[] = [];
  showEditAssetModal: boolean = false;
  editAssetBuffer: Asset2 = new Asset2();
  // filteredAssetList: Asset2[] = [];
  loading: boolean = false;


  // constructor(private i18n: NzI18nService, private portService: PortServiceService, private targetsService: TargetsService, private scanService: ScansService) {
  constructor(private i18n: NzI18nService, private assetsService: AssestsService) {
  }

  ngOnInit(): void {
    this.changeLanguage();
    this.getAssets();
    // this._getPorts();
    // this._getTargetsInfo();
  }

  getAssets() {
    this.loading = true;
    this.assetsService.get_assets()
      .then((resp) => {
        console.log(resp);
        this.loading = false;
        if (['items'] && resp['items'].length > 0) {
          console.log(resp['items']);
          this.assetsList = resp['items'];
        }
      })
      .catch(error => {
        this.loading = false;
      });
  }

  showEditAssetDialog(asset_to_edit: Asset2) {
    this.editAssetBuffer = asset_to_edit;
    this.showEditAssetModal = true;
  }

  hideEditAssetDialog() {
    this.editAssetBuffer = new Asset2();
    this.showEditAssetModal = false;
  }

  search(): void {
    // this.visible = false;
    // console.log(this.assetsList[0].name);
    // this.assetsList = this.assetsList.filter(a =>
    //   a.name.indexOf(this.searchString) !== -1
    // );
    this.assetsList = this.assetsList.filter(a => JSON.stringify(a).indexOf(this.searchString) !== -1);
    // console.log(this.assetsList);
  }

  reset(): void {
    this.searchString = '';

    this.getAssets();
  }

  _showCreateAssetDialog() {
    this.showCreateAssetModal = true;
  }

  hideCreateAssetDialog() {
    this.new_asset = new Asset2();
    this.showCreateAssetModal = false;
  }//10.0.255.32

  changeLanguage(): void {
    this.i18n.setLocale(en_US);
  }

  updateAsset(valid: any, asset: Asset2) {
    if (valid) {
      this.assetsService.update_Asset(asset)
        .then((resp => {
          console.log(resp);
          if (resp['result'] && resp['status_code'] == 200) {
            this.getAssets();
            this.hideEditAssetDialog();
          }
        }));
    }
  }

  createAsset(valid: any): void {
    if (valid) {
      this.assetsService.create_Asset(this.new_asset)
        .then(resp => {
          console.log(resp);
          if (resp && resp['result'] && resp['status_code'] == 200) {
            this.getAssets();
            this.hideCreateAssetDialog();
          }
        });
    }
    //   this._createTargets();
    // this.create_asset();
    // form.reset();
  }


  _deleteAsset(asset: Asset2) {
    // this.assetsService.poutsa();
    this.assetsService.delete_Asset(asset)
      .then((resp => {
        console.log(resp);
        if (resp && resp['result'] && resp['status_code'] == 200) {
          this.getAssets();
        }
      }));
    // console.log('poutsa');
  }

  cancelDelete() {
  }

  discover_all_assets() {
    this.assetsService.discoverAllAssets()
      .then((resp) => {
        console.log(resp);
      });
  }
}
