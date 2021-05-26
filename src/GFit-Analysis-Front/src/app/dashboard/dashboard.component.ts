import { Component, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { Subscription, timer } from 'rxjs';
import { ChartComponent } from '../chart/chart.component';
import { AuthService } from '../services/auth.service';
import { DataApiService } from '../services/data-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {

  totalSteps: number = null;
  totalCalories: number = null;
  eachDayValues: any;
  progress: any;
  daysOfWeek: Array<string>;
  unachievedBadges: Array<any> = null;
  dataType: string = 'steps';
  isWeekly: boolean = true;
  stepsSelected: boolean = true;
  selectorButtonsLoaded: boolean = false;
  isAuth: boolean = false;
  exerciseDataSent: boolean = false;
  goalsLoaded: boolean = false;
  progressLoaded: boolean = false;
  hasGoalsLeft: boolean = false;
  // exerciseWeek: Array<any> = [];
  private timerSubscription: Subscription;
  private buttonsTimerSubscription: Subscription;

  constructor(private authService: AuthService, private dataApi: DataApiService) { }

  @ViewChild(ChartComponent) chartComponent: ChartComponent;

  ngAfterViewInit(): void {

    this.buttonsTimerSubscription = timer(0, 1000).subscribe(() => {

      if (this.chartComponent !== null && this.chartComponent !== undefined) {

        if (this.isWeekly) {
          if (this.chartComponent.totalCalories !== null && this.chartComponent.totalSteps !== null) {
            this.totalSteps = this.chartComponent.totalSteps;
            this.totalCalories = this.chartComponent.totalCalories;
            this.selectorButtonsLoaded = true;
          }
        } else {
          if (this.chartComponent.weekValuesObject !== null && this.chartComponent.weekValuesObject !== undefined) {
            console.log(this.chartComponent.weekValuesObject);
            this.daysOfWeek = Object.keys(this.chartComponent.weekValuesObject);
            this.eachDayValues = this.chartComponent.weekValuesObject;
          }
        }

      }

    });

  }

  ngOnInit(): void {

    let selector = (<HTMLInputElement>document.getElementById('select'));

    selector.addEventListener('change', () => {
      if (selector.value === 'weekly') {
        this.isWeekly = true;
        console.log("weekly");
      } else {
        this.isWeekly = false;
        console.log("daily");
      }
    });

    this.authService.isAuth().subscribe(auth => {

      if (auth !== null && auth !== undefined) {

        this.isAuth = true;

        auth.getIdTokenResult().then((token) => {

          let epochExp = parseInt(token.claims.exp); // Takes the expiration time in epoch from the current token

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

      }

    });


    this.timerSubscription = timer(0, 1000).subscribe(() => {

      if (this.exerciseDataSent) {

        this.timerSubscription.unsubscribe();

      } else {

        if (this.isAuth) {

          // Send exercise data to backend.
          if (localStorage.getItem('user') !== undefined && localStorage.getItem('user') !== null) {

            this.loadDatatoBackend();

          } else {
            console.log("Could not retrieve user, possibly due to lack of connection to the backend");
          }

        }

      }

    });

  }

  selectButtonSteps() {
    this.stepsSelected = true;

    let buttonSteps = document.getElementById('button-steps');
    let buttonCalories = document.getElementById('button-calories');

    buttonSteps.classList.remove('button', 'boxShadow');
    buttonSteps.classList.add('button-selected', 'boxShadowHover');

    buttonCalories.classList.remove('button-selected', 'boxShadowHover');
    buttonCalories.classList.add('button', 'boxShadow');

    // chart modification

    this.dataType = 'steps';
  }

  selectButtonCalories() {
    this.stepsSelected = false;

    let buttonSteps = document.getElementById('button-steps');
    let buttonCalories = document.getElementById('button-calories');

    buttonCalories.classList.remove('button', 'boxShadow');
    buttonCalories.classList.add('button-selected', 'boxShadowHover');

    buttonSteps.classList.remove('button-selected', 'boxShadowHover');
    buttonSteps.classList.add('button', 'boxShadow');

    // chart modification

    this.dataType = 'calories';
  }

  loadDatatoBackend(optionalUser?: string) {
    let exerciseWeek = [];
    let stepsWeek: Array<any> = [];
    let caloriesWeek: Array<any> = [];
    let user = null;

    if (localStorage.getItem('user') != null) {
      user = JSON.parse(localStorage.getItem('user'));
    } else if (optionalUser !== null && optionalUser !== undefined) {
      user = optionalUser;
    }

    // console.log("DATA LOAD: " + JSON.stringify(user));

    this.dataApi.getWeekDailyCaloriesCount().subscribe(caloriesData => {

      for (let i = 0; i < 7; i++) { // These data buckets come with arrays of 7, which resembles a hole week.

        if (caloriesData.bucket[i].dataset[0].point.length > 0) {

          caloriesWeek.push(caloriesData.bucket[i]);

        } else {

          let aux = {
            dataset: [
              {
                point: [
                  {
                    value: [
                      {
                        fpVal: 0
                      }
                    ]
                  }
                ]
              }
            ]
          };

          caloriesWeek.push(aux);

        }

      }

      this.dataApi.getWeekDailyStepCount().subscribe(stepsData => {

        for (let i = 0; i < 7; i++) {

          if (stepsData.bucket[i].dataset[0].point.length > 0) {

            stepsWeek.push(stepsData.bucket[i]);

          } else {

            let aux = {
              dataset: [
                {
                  point: [
                    {
                      value: [
                        {
                          intVal: 0
                        }
                      ]
                    }
                  ]
                }
              ]
            };

            stepsWeek.push(aux);

          }

        }

        if (stepsWeek !== null && caloriesWeek !== null) {

          let weekLength = caloriesWeek.length;

          for (let i = 0; i < weekLength; i++) {

            let todayDate: Date = new Date();
            let date: Date = new Date(parseInt(caloriesWeek[i].startTimeMillis));
            let simpleDate: string = date.getFullYear() + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + ("0" + (date.getDate())).slice(-2);

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

              exerciseWeek.push(exerciseDay);

            }

          }

          console.log(exerciseWeek);

          this.dataApi.postUserData(exerciseWeek, user).subscribe(refreshUser => {

            console.log("Save");
            console.log(refreshUser);

            this.exerciseDataSent = true;

            localStorage.setItem('user', JSON.stringify(refreshUser));

            // Get unachieved badges
            this.dataApi.getUnachievedBadges(refreshUser).subscribe(data => {
              if (data !== null) {
                this.unachievedBadges = data;
                this.hasGoalsLeft = true;
              } else {
                this.hasGoalsLeft = false;
              }
              this.goalsLoaded = true;
            });

            // Get progress
            this.dataApi.getProgress(refreshUser).subscribe(data => {
              if (data !== null) {
                this.progress = data;
                
              } else {
                console.log("User has no progress at all");
              }
              this.progressLoaded = true;
            });

          }, (error) => {
            if (error.status === 0) {
              localStorage.removeItem('user');
              console.log("Not connected to backend");
            } else if (error.status === 500) {
              console.log("Error with the petition");
            }
          });

        }

      });

    });

  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
    this.buttonsTimerSubscription.unsubscribe();
  }

}
