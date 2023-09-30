import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ViewEncapsulation} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ContentComponent} from './dashboard/content/content.component';
import {CustomscanComponent} from './dashboard/content/customscan/customscan.component';
import {EntitiesComponent} from './dashboard/content/entities/entities.component';
import {ExtraComponent} from './dashboard/content/extra/extra.component';
import {HomeComponent} from './dashboard/content/home/home.component';
import {NvtrepoComponent} from './dashboard/content/nvtrepo/nvtrepo.component';
import {FooterComponent} from './dashboard/footer/footer.component';
import {HeaderComponent} from './dashboard/header/header.component';
import {MenubarComponent} from './dashboard/menubar/menubar.component';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IconConfig, NzCheckboxModule, NzMessageModule, NzModalModule, NzToolTipModule} from 'ng-zorro-antd';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {
  NgZorroAntdModule,
  NzButtonModule,
  NzDatePickerModule,
  NzFormModule,
  NzGridModule,
  NzIconModule,
  NzMenuModule, NzProgressModule,
  NzSliderModule
} from 'ng-zorro-antd';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import {ChartsModule} from 'ng2-charts';
import {IconDefinition} from '@ant-design/icons-angular';
import {
  AlertOutline,
  UserOutline,
  GlobalOutline,
  CheckOutline,
  LoadingOutline,
  QuestionCircleOutline,
  StopOutline,
  PlaySquareOutline, BarChartOutline
} from '@ant-design/icons-angular/icons';
import {
  SyncOutline,
  DeleteOutline,
  EditFill,
  ExportOutline,
  EditOutline,
  HomeOutline,
  SecurityScanOutline,
  DatabaseOutline,
  MinusOutline,
  NodeIndexOutline,
  PlusSquareOutline,
  PlusOutline,
  AimOutline,
  FileSearchOutline,
  CloseOutline,
  DownloadOutline
} from '@ant-design/icons-angular/icons';
import {UserprofileComponent} from './dashboard/content/userprofile/userprofile.component';
import {HelpComponent} from './dashboard/content/help/help.component';
import {ManualComponent} from './dashboard/manual/manual.component';
import {AboutComponent} from './dashboard/about/about.component';
import {TargetsComponent} from './dashboard/content/targets/targets.component';
import {AssestsService} from './services/assests.service';
import { ToIntPipe } from './pipes/to-int.pipe';
import { GetReportsIDsPipe } from './pipes/get-reports-ids.pipe';
import { GetReportPipe } from './pipes/get-report.pipe';
import {NvdService} from './services/nvd.service';
import { ReportOutPipe } from './pipes/report-out.pipe';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { GetReportCvssPipe } from './pipes/get-report-cvss.pipe';
import {CvssV3ColorPipe} from './pipes/cvss-v3-color.pipe';

const icons: IconDefinition[] = [BarChartOutline, AlertOutline, DownloadOutline, UserOutline, GlobalOutline, CheckOutline, LoadingOutline, QuestionCircleOutline,
  DeleteOutline, SyncOutline, ExportOutline, EditFill, EditOutline, HomeOutline, SecurityScanOutline, DatabaseOutline, NodeIndexOutline, PlusSquareOutline, MinusOutline, StopOutline, PlusOutline, AimOutline, PlaySquareOutline, CloseOutline, FileSearchOutline];

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        ContentComponent,
        CustomscanComponent,
        EntitiesComponent,
        ExtraComponent,
        HomeComponent,
        NvtrepoComponent,
        FooterComponent,
        HeaderComponent,
        MenubarComponent,
        UserprofileComponent,
        HelpComponent,
        ManualComponent,
        AboutComponent,
        TargetsComponent,
        ToIntPipe,
        GetReportsIDsPipe,
        GetReportPipe,
        ReportOutPipe,
        GetReportCvssPipe,
        CvssV3ColorPipe,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzGridModule,
    NzIconModule,
    NzMenuModule,
    NzSliderModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzFormModule,
    NgZorroAntdModule,
    NzSpaceModule,
    ChartsModule,
    NzDatePickerModule,
    NzProgressModule,
    NzIconModule.forRoot(icons),
    NzCheckboxModule,
    NzToolTipModule,
    NzProgressModule,
    NzMessageModule,
    NzModalModule,
    NzDrawerModule,
    NgxChartsModule
  ],
  providers: [AssestsService, NvdService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
