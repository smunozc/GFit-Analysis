import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
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
export class ChartComponent implements OnDestroy, OnChanges {

  public chart: Chart;
  public chartHeight: number;
  public totalSteps: number = 0;
  public totalCalories: number = 0;
  public valuesPerDay: Array<number>;
  public weekValuesObject: any;
  public loaded: boolean = false;
  public exerciseWeek: Array<any> = [];

  private timerSubscription: Subscription;

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

    this.authService.isAuth().subscribe(auth => {

      if (auth !== null && auth !== undefined) {

        // It's an authenticated user

        auth.getIdTokenResult().then((token) => {

          let epochExp = parseInt(token.claims.exp); // Takes the expiration time in epoch from the actual token

          if (epochExp < 10000000000) {
            epochExp *= 1000; // convert to milliseconds (Epoch is usually expressed in seconds, but Javascript uses Milliseconds)
          }
          let expDateMilis = epochExp + (new Date().getTimezoneOffset() * -1); //for timeZone

          let expDate = new Date(expDateMilis);
          expDate.setMinutes(expDate.getMinutes() - 5); // 5 min before it expires it will refresh the token

          //console.log('actual: ' + new Date() + ' expirado: ' + expDate);

          if (new Date() >= expDate) {

            // CODE SNIPPET IN CASE THAT I ACTUALLY MANAGE TO AUTO-REALOAD THE TOKEN.
            /*
            firebase.auth().
            let credential = firebase.auth.GoogleAuthProvider.credential(token.token);
            firebase.auth().signInWithCredential(credential).then(credential => {
              console.log(credential);
              localStorage.setItem('credential', JSON.stringify(credential.credential));
            });
            */

            this.authService.logoutUser(); // In the case that current time has exeeded expiration time for the token the user logsout
          }

        });

        // Every minute data will be updated.
        this.timerSubscription = timer(0, 120000).subscribe(() => this.checkValuesPerDay());
        // console.log(this.valuesPerDay + '\n' + 'inchart: ' + this.chart.data.series);

        // Send exercise data to backend.
        if(localStorage.getItem('user') === undefined || localStorage.getItem('user') === null){

          this.authService.loginUser(localStorage.getItem('googleUser')).subscribe(resultUser => {
            console.log('Login to backend successful');
            this.loadDatatoBackend();
          }, (error) => {
            if(error.status === 0){
              console.log("Not connected to backend");
            }
          });

        } else {
          this.loadDatatoBackend();
        }

      }

    });

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
      }
    });

  }

  loadDatatoBackend() {
    let stepsWeek: Array<any> = null;
    let caloriesWeek: Array<any> = null;
    let user: any = JSON.parse(localStorage.getItem('user'));

    this.dataApi.getWeekDailyCaloriesCount().subscribe(caloriesData => {
      caloriesWeek = caloriesData.bucket; // These data buckets come with arrays of 7, which resembles a hole week.

      this.dataApi.getWeekDailyStepCount().subscribe(stepsData => {
        stepsWeek = stepsData.bucket;

        if (stepsWeek !== null && caloriesWeek !== null) {

          let weekLength = stepsWeek.length;

          for (let i = 0; i < weekLength; i++) {

            let todayDate: Date = new Date();
            let date: Date = new Date(parseInt(stepsWeek[i].startTimeMillis));
            let simpleDate: string = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()

            if (date <= todayDate) {
              // console.log(simpleDate);
              // console.log(stepsWeek[i].dataset[0].point[0].value[0].intVal);
              // console.log(Math.trunc(caloriesWeek[i].dataset[0].point[0].value[0].fpVal));

              let exerciseDay: any = {
                "date": simpleDate,
                "caloriesBurned": Math.trunc(caloriesWeek[i].dataset[0].point[0].value[0].fpVal),
                "estimatedSteps": parseInt(stepsWeek[i].dataset[0].point[0].value[0].intVal),
                "user": user
              };

              this.exerciseWeek.push(exerciseDay);

            }

          }

          // console.log(this.exerciseWeek);

          this.dataApi.postUserData(this.exerciseWeek, user).subscribe(refreshUser => {
            console.log(refreshUser);

            localStorage.setItem('user', JSON.stringify(refreshUser));

          }, (error) => {
            if(error.status === 0){
              localStorage.removeItem('user');
              console.log("Not connected to backend");
            }
          });

        }

      });

    });

  }

  public ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }

}
