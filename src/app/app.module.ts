import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { AboutComponent } from './about/about.component';
import { LivechartComponent } from './livechart/livechart.component';
import { HttpClientModule } from '@angular/common/http';
import { GaugeComponent } from './gauge/gauge.component';
import { SignalsComponent } from './signals/signals.component';


const appRoutes: Routes = [
  {}
];

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    AboutComponent,
    LivechartComponent,
    GaugeComponent,
    SignalsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
