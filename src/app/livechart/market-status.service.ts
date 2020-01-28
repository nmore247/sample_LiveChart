import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject, from, of } from 'rxjs';
import { MarketPrice } from './marketPrice';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Injectable({
    providedIn: 'root'
  })
  export class MarketStatusService {

    // tslint:disable-next-line: variable-name
    private conn: HubConnection;

    constructor(private httpClient: HttpClient) {
        this.conn = new HubConnectionBuilder().withUrl('https://localhost:5001/hub').build();
        // this.conn.on('data', (arg0) => {
        //     this.add({
        //       open: arg0.data[0],
        //       close: arg0.data[1],
        //       date: new Date()
        //     });
        //   });
        this.conn.start()
            .then(() => console.log('Connection started!'))
            .catch(err => console.log('Error in connection'));
    }

    getInitialMarketStatus() {
    //   return this.httpClient.get<MarketPrice[]>(`${this.baseUrl}/api/market`);
      return of([]);
    }

    getUpdates() {
      // tslint:disable-next-line: prefer-const
      const subj = new Subject<MarketPrice>();
      const obser = from(subj);

      this.conn.on('data', (arg) => {
        subj.next({
            open: arg.data[0],
            close: arg.data[1],
            date: new Date()
        });
      });

      return obser;
    }
  }
