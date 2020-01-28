import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { BehaviorSubject, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import { MarketPrice } from './livechart/marketPrice';
import { MarketStatusService } from './livechart/market-status.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public toPlot: MarketPrice[] = [];
  title = 'Dashboards';
  ngOnInit(): void {

  }

  add(price: MarketPrice): void {
    this.toPlot.push(price);
  }

constructor(private marketStatusSvc: MarketStatusService) {
  this.marketStatusSvc.getInitialMarketStatus()
    .subscribe(prices => {
      this.toPlot = prices;

      const marketUpdateObservable =  this.marketStatusSvc.getUpdates();
      marketUpdateObservable.subscribe((latestStatus: MarketPrice) => {
        this.toPlot = [latestStatus].concat(this.toPlot);
      });
    });
  }
}
