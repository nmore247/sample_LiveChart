import { Component, OnInit, Input, Output, EventEmitter, ElementRef, OnChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { svg } from 'd3';
import { DataModel } from './DataModel';




@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges {
  @ViewChild('chart', {static: false})
  private chartContainer: ElementRef;

  private margin = {top: 20, right: 20, bottom: 30, left: 40};

  private isChartShown = false; // default condition to avoid creation of multiple charts

  data: DataModel[] = [
    {letter: 'b', frequency: 0.05},
    {letter: 'c', frequency: 0.1},
    {letter: 'd', frequency: 0.66},
    {letter: 'e', frequency: 0.2},
    {letter: 'f', frequency: 0.85}
  ];


  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  showChart(): void {
    if (!this.isChartShown) {
      this.isChartShown = true;

      const element = this.chartContainer.nativeElement;

      const svgElement = d3.select(this.chartContainer.nativeElement).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

      const contentWidth = element.offsetWidth - this.margin.left - this.margin.right;
      const contentHeight = element.offsetHeight - this.margin.top - this.margin.bottom;

      const x = d3
        .scaleBand()
        .rangeRound([0, contentWidth])
        .padding(0.1)
        .domain(this.data.map(d => d.letter));

      const y = d3
        .scaleLinear()
        .rangeRound([contentHeight, 0])
        .domain([0, d3.max(this.data, d => d.frequency)]);

      const g = svgElement.append('g')
        .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

      g.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + contentHeight + ')')
        .call(d3.axisBottom(x));

      g.append('g')
        .attr('class', 'axis axis--y')
        .call(d3.axisLeft(y).ticks(10, '%'))
        .append('text')
          .attr('transform', 'rotate(-90)')
          .attr('y', 6)
          .attr('dy', '0.71em')
          .attr('text-anchor', 'end')
          .text('Frequency');

      g.selectAll('.bar')
        .data(this.data)
        .enter().append('rect')
          .attr('class', 'bar')
          .attr('x', d => x(d.letter))
          .attr('y', d => y(d.frequency))
          .attr('width', x.bandwidth())
          .attr('height', d => contentHeight - y(d.frequency));
    }

  }



  constructor() { }
}
