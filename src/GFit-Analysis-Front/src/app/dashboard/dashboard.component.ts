import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { ChartComponent } from '../chart/chart.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logoutUser();
  }

  selectButtonSteps(){
    let buttonSteps = document.getElementById('button-steps');
    let buttonCalories = document.getElementById('button-calories');

    buttonSteps.className = 'button-selected';
    buttonCalories.className = 'button';
  }

  selectButtonCalories(){
    let buttonSteps = document.getElementById('button-steps');
    let buttonCalories = document.getElementById('button-calories');

    buttonSteps.className = 'button';
    buttonCalories.className = 'button-selected';
  }

}
