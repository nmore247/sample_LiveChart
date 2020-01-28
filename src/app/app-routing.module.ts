import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GaugeComponent } from './gauge/gauge.component';
import { SignalsComponent } from './signals/signals.component';

const routes: Routes = [
    {path: 'about' , component: AboutComponent},
    {path: 'SystemLoad' , component: GaugeComponent},
    {path: 'Signal' , component: SignalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
