import { Component, OnInit } from '@angular/core';
import { ILineChartOptions, IChartistAnimationOptions, IChartistData } from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: 'app-chart',
  template: `
  <x-chartist
    [type]="chart.type"
    [data]="chart.data"
    [options]="chart.options"
    [events]="chart.events"
  ></x-chartist>
  `,
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  public chart: Chart;
  public chartHeight: number;

  constructor() {
    this.updateChartHeight();

    this.chart = {
      data: {
        labels: [
          'Mon',
          'Tue',
          'Wed',
          'Thu',
          'Fri',
          'Sat',
          'Sun'
        ],
        series: [
          [500, 4200, 30, 7000, 2500, 0, 0]
        ]
      },
      type: 'Line',
      options: {
        low: 0,
        showArea: true,
        height: this.chartHeight
      }
    }
  }

  updateChartHeight() {
    let mediaQuery = window.matchMedia("(min-width: 1024px)");
    if (mediaQuery.matches) { // If media query matches
      this.chartHeight = 500;
    } else {
      this.chartHeight = 250;
    }
  }

}
