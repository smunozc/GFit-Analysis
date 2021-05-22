import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
// import { ILineChartOptions, IChartistAnimationOptions, IChartistData } from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';
import { Subscription, timer } from 'rxjs';
import { AuthService } from '../services/auth.service';
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
export class ChartComponent implements OnInit, OnDestroy, OnChanges {

  public chart: Chart;
  public chartHeight: number;
  public totalSteps: number = 0;
  public totalCalories: number = 0;
  public valuesPerDay: Array<number>;
  public weekValuesObject: any;
  public loaded: boolean = false;
  
  private timerSubscription: Subscription;
  
  @Input() isAuth: boolean;
  @Input() dataType: string;

  constructor(private dataApi: DataApiService, private dataProcessing: DataProcessingService, private authService: AuthService) {
    this.updateChartHeight();
    this.valuesPerDay = [0, 0, 0, 0, 0, 0, 0];
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

  }

  ngOnInit() {

    // Every minute data will be updated.
    this.timerSubscription = timer(0, 120000).subscribe(() => {
      if(this.isAuth){
        this.checkValuesPerDay();
      }
    });
    // console.log(this.valuesPerDay + '\n' + 'inchart: ' + this.chart.data.series);

  }

  ngOnChanges(changes: SimpleChanges) {
    this.checkValuesPerDay();
  }

  updateChartHeight() {
    let mediaQuery = window.matchMedia("(min-width: 1024px)");
    if (mediaQuery.matches) { // If media query matches it will add height to the chart.
      this.chartHeight = 500;
    } else {
      this.chartHeight = 250;
    }
  }

  checkValuesPerDay() {

    // GET DATA FROM API

    // GET STEPS

    this.dataApi.getWeekDailyStepCount().subscribe(data => {

      let dailyStepCount = this.dataProcessing.processData(data.bucket, this.dataType);
      this.weekValuesObject = dailyStepCount;

      if (this.dataType === 'steps') {
        this.totalSteps = this.dataProcessing.getTotalData(data.bucket, this.dataType);

        if (dailyStepCount !== null) {
          this.valuesPerDay = [];
          for (let day in dailyStepCount) {
            this.valuesPerDay.push(dailyStepCount[day]);
          }

          // If there are days yet to analize
          if (this.valuesPerDay.length < 7) {
            let lastingNum = 7 - this.valuesPerDay.length;
            for (let i = 0; i < lastingNum; i++) {
              this.valuesPerDay.push(0);
            }
          }

          this.chart.data.series = [this.valuesPerDay];
          this.loaded = true;

        } else {
          console.log('Could not load the data');
        }

      }

    }, (error) => { // The application will force a logout when the request is unauthenticated.
      if (error.status === 401) {
        this.authService.logoutUser();
      } else if(error.status === 403){
        alert("Please make sure you have created and used a google fitness account until you have steps and calories data, otherwise the app won't work");
      }
    });

    // GET CALORIES

    this.dataApi.getWeekDailyCaloriesCount().subscribe(data => {

      let dailyCaloriesCount = this.dataProcessing.processData(data.bucket, this.dataType);
      this.weekValuesObject = dailyCaloriesCount;

      if (this.dataType === 'calories') {
        this.totalCalories = this.dataProcessing.getTotalData(data.bucket, this.dataType);

        if (dailyCaloriesCount !== null) {
          this.valuesPerDay = [];
          for (let day in dailyCaloriesCount) {
            this.valuesPerDay.push(dailyCaloriesCount[day]);
          }

          // If there are days yet to analize
          if (this.valuesPerDay.length < 7) {
            let lastingNum = 7 - this.valuesPerDay.length;
            for (let i = 0; i < lastingNum; i++) {
              this.valuesPerDay.push(0);
            }
          }
          this.chart.data.series = [this.valuesPerDay];
          this.loaded = true;

        } else {
          console.log('Could not load the data');
        }

      }

    }, (error) => {
      if (error.status === 401) {
        this.authService.logoutUser();
      } else if(error.status === 403){
        alert("Please make sure you have created and used a google fitness account until you have steps and calories data, otherwise the app won't work");
      }
    });

  }

  public ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }

}
