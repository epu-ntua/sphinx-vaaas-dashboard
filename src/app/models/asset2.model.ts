export class Asset2 {
  constructor() {
    this._id = '';
    this.name = '';
    this.hostnames = [];
    this.description = '';
    this.assetType = '';
    this.assessed = false;
    this.cvss = 0.0;
    // this.modified = '';
    this.status = false;
    this.sensitivity = 0;
    this.location = '';
    this.owner = '';
    this.backupLocation = '';
    // this.dependedServices = '';
    this.services = [];
    this.assetValue = 0;
    this.vendor = '';
    this.active = true;
    this.ip = '';
    this.mac = 'ff:ff:ff:ff:ff:ff';
  }

  _id: string;
  name: string;
  hostnames: any[];
  description: string;
  assetType: string;
  assessed: boolean;
  cvss: number;
  // modified: string;
  status: boolean;
  sensitivity: number;
  location: string;
  owner: string;
  backupLocation: string;
  // dependedServices: string;
  services: any[];
  assetValue: number;
  vendor: string;
  active: boolean;
  ip: string;
  mac: string;
}
