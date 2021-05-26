import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  hasBackend: boolean = false;
  scoreboardRetrieved: boolean = false;
  scoreboard: any;

  constructor() { }

  ngOnInit(): void {

    if(localStorage.getItem('user') !== null){
      this.hasBackend = true;
    } else {
      this.hasBackend = false;
    }

    if(localStorage.getItem('scoreboard') !== null){
      this.scoreboard = JSON.parse(localStorage.getItem('scoreboard'));
      this.scoreboardRetrieved = true;
    } else {
      this.scoreboardRetrieved = false;
    }

  }

}
