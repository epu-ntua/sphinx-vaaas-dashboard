import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {en_US} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {NgZorroAntdModule, NzButtonModule, NzFormModule, NzGridModule, NzIconModule, NzMenuModule, NzSliderModule} from 'ng-zorro-antd';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FooterComponent} from './dashboard/footer/footer.component';
import {HeaderComponent} from './dashboard/header/header.component';
import {MenubarComponent} from './dashboard/menubar/menubar.component';
import {CustomscanComponent} from './dashboard/content/customscan/customscan.component';
import {NvtrepoComponent} from './dashboard/content/nvtrepo/nvtrepo.component';
import {EntitiesComponent} from './dashboard/content/entities/entities.component';
import {ExtraComponent} from './dashboard/content/extra/extra.component';
import {HomeComponent} from './dashboard/content/home/home.component';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import {ContentComponent} from './dashboard/content/content.component';
import {MenubarService} from './services/menubar.service';
import 'ant-design-pro/dist/ant-design-pro.css';
import Charts, {Gauge} from 'ant-design-pro/lib/Charts';
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    MenubarComponent,
    CustomscanComponent,
    NvtrepoComponent,
    EntitiesComponent,
    ExtraComponent,
    HomeComponent,
    ContentComponent,
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
    Gauge,

  ],
  providers: [{provide: NZ_I18N, useValue: en_US}, MenubarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
