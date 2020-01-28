// tslint:disable-next-line: max-line-length
import { Component, OnInit, Input, Output, EventEmitter, ElementRef, OnChanges, ViewChild, ViewEncapsulation, SimpleChanges, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';
import { svg } from 'd3';
import { SimpleGauge } from 'd3-simple-gauge';
import { Signal } from '../signals/signaldata';
import { Observable } from 'rxjs';
import { SignalInfoService } from '../signals/signal-info.service';




@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {
  // tslint:disable-next-line: member-ordering
  @ViewChild('gauge', {static: false})
  // private chartContainer: ElementRef;
  private isGaugeShown = false;

  public signalInfo: Observable<Signal>;

  ngOnInit(): void {

  }

  showGauge(): void {
    if (!this.isGaugeShown) {
      this.signalInfo = this.signalInfoSvc.getSignalInfo('7307C60C3B');


      this.isGaugeShown = true;

      // tslint:disable-next-line: no-shadowed-variable
      const svg = d3.select('#gauge')
        .append('svg')
        .attr('width', 400)
        .attr('height', 250);

      // tslint:disable-next-line: align
      const simpleGauge = new SimpleGauge({
       animationDelay: 0,          // The delay in ms before to play the needle animation (optional)
       animationDuration: 3000,    // The duration in ms of the needle animation (optional)
       barWidth: 40,               // The bar width of the gauge (optional)
       chartInset : 50,            // The chart inset (margin),
       easeType: d3.easeElastic,   // The ease type to use with the needle animation (optional)
       el: svg.append('g'),        // The element that hosts the gauge
       height: 200,                // The height of the gauge
       interval: [0, 200],         // The interval (min and max values) of the gauge (optional)
       needleRadius: 15,           // The radius of the needle (optional)
       needleColor : 'black',      // The needle color,
       percent: 0.5,               // The initial percentage of he needle (optional)
       sectionsColors: [           // The color of each section
         'green',
         'orange',
         'red'
      ],
      sectionsCount: 3,           // The number of sections in the gauge
      width: 400                  // The width of the gauge,
  });

      d3.select('button')
    .on('click', () => {
      simpleGauge.percent = Math.random();
      d3.select('#position').text(d3.format('.0%')(simpleGauge.percent));
      });

      setTimeout(() => {
        simpleGauge.percent = 0.8;  // The new percent of the needle to set (70%)

        setTimeout(() => {
          simpleGauge.value = 70;  // The new value of the needle to set inside the interval (21%)
        }, 500);
      }, 500);
    }
  }

    constructor(private signalInfoSvc: SignalInfoService) { }

}
