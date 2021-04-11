import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { ChartComponent } from '../chart/chart.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalSteps: number;
  stepsSelected: boolean = true;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    let aux = localStorage.getItem('totalStepsWeek')

    if(aux !== null){
      this.totalSteps = parseInt(aux);
    }
  }

  logout(){
    this.authService.logoutUser();
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
  }

}
