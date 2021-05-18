import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  hasBackend: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('user') !== null){
      this.hasBackend = true;
    } else {
      this.hasBackend = false;
    }
  }

}
