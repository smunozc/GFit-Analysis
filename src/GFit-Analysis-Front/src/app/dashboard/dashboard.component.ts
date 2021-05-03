import { Component, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { Subscription, timer } from 'rxjs';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {

  totalSteps: number = null;
  totalCalories: number = null;
  eachDayValues: any;
  daysOfWeek: Array<string>;
  dataType: string = 'steps';
  isWeekly: boolean = true;
  stepsSelected: boolean = true;
  selectorButtonsLoaded: boolean = false;
  private timerSubscription: Subscription;

  constructor() { }

  @ViewChild(ChartComponent) chartComponent: ChartComponent;

  ngAfterViewInit(): void {
    this.timerSubscription = timer(0, 2000).subscribe(() => {

      if(this.chartComponent !== null && this.chartComponent !== undefined) {

        if(this.isWeekly){
          if (this.chartComponent.totalCalories !== null && this.chartComponent.totalSteps !== null) {
            this.totalSteps = this.chartComponent.totalSteps;
            this.totalCalories = this.chartComponent.totalCalories;
            this.selectorButtonsLoaded = true;
          }
        } else {
          if(this.chartComponent.weekValuesObject !== null && this.chartComponent.weekValuesObject !== undefined) {
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
      if(selector.value === 'weekly'){
        this.isWeekly = true;
        console.log("weekly");
      } else {
        this.isWeekly = false;
        console.log("daily");
      }
    });

  }

  selectButtonSteps() {
    this.stepsSelected = true;

    let buttonSteps = document.getElementById('button-steps');
    let buttonCalories = document.getElementById('button-calories');

    buttonSteps.className = 'button-selected';
    buttonCalories.className = 'button';

    // let totalStepsTag = document.getElementById('totalSteps');
    // let totalCaloriesTag = document.getElementById('totalCalories');

    // totalStepsTag.className = 'totalDataVal-selected';
    // totalCaloriesTag.className = 'totalDataVal';

    // chart modification

    this.dataType = 'steps';
  }

  selectButtonCalories() {
    this.stepsSelected = false;

    let buttonSteps = document.getElementById('button-steps');
    let buttonCalories = document.getElementById('button-calories');

    buttonSteps.className = 'button';
    buttonCalories.className = 'button-selected';

    // let totalStepsTag = document.getElementById('totalSteps');
    // let totalCaloriesTag = document.getElementById('totalCalories');

    // totalStepsTag.className = 'totalDataVal';
    // totalCaloriesTag.className = 'totalDataVal-selected';

    // chart modification

    this.dataType = 'calories';
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }

}
