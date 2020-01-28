import { Component, OnInit, Input, Output, EventEmitter, ElementRef, OnChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { svg } from 'd3';
import { Signal } from './signaldata';


@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent implements OnInit {

    @ViewChild('chart', {static: false})
    private chartContainer: ElementRef;


    data: Signal[] = [
   /* { id: '2418BBE162' , type: 'voltage' },
      { id: '7307C60C3B' , type: 'current' },
      { id: '93C15ACDD2' , type: 'voltage' },
      { id: 'DDB590BE3A' , type: 'voltage' },
      { id: '91F05357F5' , type: 'voltage' },
      { id: 'F4D88EA91C' , type: 'current' },
      { id: '6CAE5D5C7C' , type: 'voltage' },
      { id: '4EDFFF492F' , type: 'current' },
      { id: '4522180533' , type: 'current' },
      { id: '78ECEECAC7' , type: 'voltage' }*/
    ];

    // tslint:disable-next-line: use-lifecycle-interface
    ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
      throw new Error('Method not implemented.');
    }

  constructor() { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
  }

}
