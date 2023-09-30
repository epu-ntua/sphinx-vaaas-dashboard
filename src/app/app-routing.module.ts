import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CustomscanComponent} from './dashboard/content/customscan/customscan.component';
import {NvtrepoComponent} from './dashboard/content/nvtrepo/nvtrepo.component';
import {EntitiesComponent} from './dashboard/content/entities/entities.component';
import {ExtraComponent} from './dashboard/content/extra/extra.component';
import {HomeComponent} from './dashboard/content/home/home.component';
import {UserprofileComponent} from './dashboard/content/userprofile/userprofile.component';
import {HelpComponent} from './dashboard/content/help/help.component';
import {ManualComponent} from "./dashboard/manual/manual.component";
import {AboutComponent} from "./dashboard/about/about.component";
import {TargetsComponent} from "./dashboard/content/targets/targets.component";


const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'tasks', component: CustomscanComponent},
      {path: 'cves', component: NvtrepoComponent},
      {path: 'entities', component: EntitiesComponent},
      {path: 'extra', component: ExtraComponent},
      {path: 'home', component: HomeComponent},
      {path: 'profile', component: UserprofileComponent},
      {path: 'help', component: HelpComponent},
      {path: 'manual', component: ManualComponent},
      {path: 'about', component: AboutComponent},
      {path: 'assets', component: TargetsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
