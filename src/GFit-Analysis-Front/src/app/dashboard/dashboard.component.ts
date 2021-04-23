import { Component, OnInit } from '@angular/core';

import { Subscription, timer } from 'rxjs';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalSteps: number = null;
  stepsSelected: boolean = true;
  selectorButtonsLoaded: boolean = false;
  private timerSubscription: Subscription;
  constructor(private chart: ChartComponent) { }

  ngOnInit(): void {
    this.timerSubscription = timer(0, 2000).subscribe(() => {

      if(localStorage.getItem('totalStepsWeek') !== null){
        this.totalSteps = parseInt(localStorage.getItem('totalStepsWeek'));
        this.selectorButtonsLoaded = true;
        this.timerSubscription.unsubscribe();
      }

    });
  }

  selectButtonSteps(){
    this.stepsSelected = true;

    let buttonSteps = document.getElementById('button-steps');
    let buttonCalories = document.getElementById('button-calories');

    buttonSteps.className = 'button-selected';
    buttonCalories.className = 'button';

    let totalStepsTag = document.getElementById('totalSteps');
    let totalCaloriesTag = document.getElementById('totalCalories');

    totalStepsTag.className = 'totalDataVal-selected';
    totalCaloriesTag.className = 'totalDataVal';

    // chart modification

    this.chart.dataType = 'steps';
    //this.chart.checkValuesPerDay();
  }

  selectButtonCalories(){
    this.stepsSelected = false;

    let buttonSteps = document.getElementById('button-steps');
    let buttonCalories = document.getElementById('button-calories');

    buttonSteps.className = 'button';
    buttonCalories.className = 'button-selected';

    let totalStepsTag = document.getElementById('totalSteps');
    let totalCaloriesTag = document.getElementById('totalCalories');

    totalStepsTag.className = 'totalDataVal';
    totalCaloriesTag.className = 'totalDataVal-selected';

    // chart modification

    this.chart.dataType = 'calories';
    //this.chart.checkValuesPerDay();
  }

}
