import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CustomscanComponent} from './dashboard/content/customscan/customscan.component';
import {NvtrepoComponent} from './dashboard/content/nvtrepo/nvtrepo.component';
import {EntitiesComponent} from './dashboard/content/entities/entities.component';
import {ExtraComponent} from './dashboard/content/extra/extra.component';
import {HomeComponent} from './dashboard/content/home/home.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'scans', component: CustomscanComponent},
      {path: 'repos', component: NvtrepoComponent},
      {path: 'entities', component: EntitiesComponent},
      {path: 'extra', component: ExtraComponent},
      {path: 'home', component: HomeComponent},
    ]
    // {path:"scan", component:CustomScanComponent}]
    // },
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
