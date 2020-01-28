import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject, from, of, Observable } from 'rxjs';
import { Signal } from './signaldata';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Injectable({
    providedIn: 'root'
  })
  export class SignalInfoService {

    // tslint:disable-next-line: variable-name
    private conn: HubConnection;
    data: Signal[] = [
    { id: '2418BBE162' , type: 'voltage', unit: '[V]', name: 'DC Voltage' },
    // { id: '7307C60C3B' , type: 'current' },
    // { id: '93C15ACDD2' , type: 'voltage' },
    // { id: 'DDB590BE3A' , type: 'voltage' },
    // { id: '91F05357F5' , type: 'voltage' },
    // { id: 'F4D88EA91C' , type: 'current' },
    // { id: '6CAE5D5C7C' , type: 'voltage' },
    // { id: '4EDFFF492F' , type: 'current' },
    // { id: '4522180533' , type: 'current' },
    // { id: '78ECEECAC7' , type: 'voltage' }
  ];

    constructor(private httpClient: HttpClient) {
        // this.conn = new HubConnectionBuilder().withUrl('https://localhost:5001/hub').build();

        // this.conn.start()
        //     .then(() => console.log('Connection started!'))
        //     .catch(err => console.log('Error in connection'));
    }

    getSignalInfo(signalId: string): Observable<Signal> {
      return of(this.data[0]);
      // return of(this.data.find((signal) => signal.id === signalId));
    }
}
