import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from '@blox/material';
import {FormsModule} from '@angular/forms';
import {DamretPageComponent} from './damret-page/damret-page.component';
import {OverPageComponent} from './over-page/over-page.component';
import {DamretComponent} from './damret-page/shared/damret_charts/damret.component';
import {OverComponent} from './over-page/shared/over_charts/over.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { CostsPageComponent } from './costs-page/costs-page.component';
import { CostsChartsComponent } from './costs-page/shared/costs-charts/costs-charts.component';
import { StockPageComponent } from './stock-page/stock-page.component';
import { StockChartsComponent } from './stock-page/shared/stock-charts/stock-charts.component';
import { TmsChartsComponent } from './tms-page/shared/tms-charts/tms-charts.component';
import {TmsPageComponent} from './tms-page/tms-page.component';
import { WhTmsPageComponent } from './wh-tms-page/wh-tms-page.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WhTmsChartsComponent } from './wh-tms-page/wh-tms-charts/wh-tms-charts.component';
import {MatTreeModule} from '@angular/material/typings/tree';
import {MatIconModule} from '@angular/material/typings/icon';
import {MatButtonModule} from '@angular/material/typings/button';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    DamretPageComponent,
    OverPageComponent,
    DamretComponent,
    OverComponent,
    CostsPageComponent,
    CostsChartsComponent,
    StockPageComponent,
    StockChartsComponent,
    TmsChartsComponent,
    TmsPageComponent,
    WhTmsPageComponent,
    PagenotfoundComponent,
    WhTmsChartsComponent,
    SettingsPageComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
