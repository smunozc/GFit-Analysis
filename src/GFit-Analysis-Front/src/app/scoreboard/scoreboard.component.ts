import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { DataApiService } from '../services/data-api.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit, OnDestroy {

  hasBackend: boolean = false;
  scoreboardRetrieved: boolean = false;
  scoreboard: any;
  private timerSubscription: Subscription;

  constructor(private dataApi: DataApiService) { }

  ngOnInit(): void {

    if(localStorage.getItem('user') !== null){
      
      this.hasBackend = true;
      this.callData();
    } else {
      this.hasBackend = false;
    }

    this.timerSubscription = timer(0, 1000).subscribe(() => {

      if(localStorage.getItem('scoreboard') !== null){
        this.scoreboard = JSON.parse(localStorage.getItem('scoreboard'));
        this.scoreboardRetrieved = true;
        this.timerSubscription.unsubscribe();
      } else {
        this.scoreboardRetrieved = false;
      }

    });

  }

  callData(){
    // Obtain monday of this week at 00:00 of my timezone
    let monday = this.getMonday(new Date());
    monday.setHours(0, 0, 0, 0);

    // Obtain sunday of this week at 23:59 of my timezone
    let sunday = new Date(monday);
    sunday.setDate(sunday.getDate() + 6);
    sunday.setHours(23, 59, 59, 999);

    // Get Scoreboard and save it in localStorage
    let mondayString = monday.getFullYear() + "/" + ("0" + (monday.getMonth() + 1)).slice(-2) + "/" + ("0" + (monday.getDate())).slice(-2);
    let sundayString = sunday.getFullYear() + "/" + ("0" + (sunday.getMonth() + 1)).slice(-2) + "/" + ("0" + (sunday.getDate())).slice(-2);

    this.dataApi.getScoreboard(mondayString, sundayString).subscribe(data => {
      localStorage.setItem('scoreboard', JSON.stringify(data));
    });
  }

  getMonday(d: Date): Date {
    d = new Date(d);
    let day = d.getDay();

    let diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }

}
