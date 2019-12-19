import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DamretPageComponent} from './damret-page/damret-page.component';
import {OverPageComponent} from './over-page/over-page.component';
import {CostsPageComponent} from './costs-page/costs-page.component';
import {StockPageComponent} from './stock-page/stock-page.component';
import {TmsPageComponent} from './tms-page/tms-page.component';
import {WhTmsPageComponent} from './wh-tms-page/wh-tms-page.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {SettingsPageComponent} from './settings-page/settings-page.component';


const routes: Routes = [
   {path: '', component: DamretPageComponent},
  {path: 'over', component: OverPageComponent},
  {path: 'costs', component: CostsPageComponent},
  {path: 'stock', component: StockPageComponent},
  {path: 'tms', component: TmsPageComponent},
  {path: 'wh-tms', component: WhTmsPageComponent},
  {path: 'settings', component: SettingsPageComponent},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
