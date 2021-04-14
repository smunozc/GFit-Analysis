import { Component, OnDestroy, OnInit } from '@angular/core';
// import { ILineChartOptions, IChartistAnimationOptions, IChartistData } from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';
import { Subscription, timer } from 'rxjs';
import { DataApiService } from '../services/data-api.service';
import { DataProcessingService } from '../services/data-processing.service';

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnDestroy {

  public chart: Chart;
  public chartHeight: number;
  public valuesPerDay: Array<number>;
  public loaded: boolean = false;
  private timerSubscription: Subscription;

  constructor( private dataApi: DataApiService, private dataProcessing: DataProcessingService) {
    this.updateChartHeight();
    this.valuesPerDay = [0,0,0,0,0,0,0];
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
          this.valuesPerDay
        ]
      },
      type: 'Line',
      options: {
        low: 0,
        showArea: true,
        height: this.chartHeight
      }
    }

    // Every minute data will be updated
    this.timerSubscription = timer(0, 60000).subscribe(() => this.checkValuesPerDay());
  }

  updateChartHeight() {
    let mediaQuery = window.matchMedia("(min-width: 1024px)");
    if (mediaQuery.matches) { // If media query matches
      this.chartHeight = 500;
    } else {
      this.chartHeight = 250;
    }
  }

  checkValuesPerDay(){

    this.dataApi.getWeekDailyStepCount().subscribe(data => {

      let dailyStepCount = this.dataProcessing.processStepData(data.bucket);

      if(dailyStepCount !== null){
        this.valuesPerDay = [];
        for (let day in dailyStepCount) {
          this.valuesPerDay.push(dailyStepCount[day]);
        }

        // If there are days yet to analize
        if(this.valuesPerDay.length < 7){
          let lastingNum = 7 - this.valuesPerDay.length;
          for(let i = 0; i < lastingNum; i++){
            this.valuesPerDay.push(0);
          }
        }

        console.log(this.valuesPerDay);
        this.chart.data.series = [this.valuesPerDay];
        this.loaded = true;

      } else {
        console.log('No se han podido cargar los datos');
      }

    });
  }

  public ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }

}
