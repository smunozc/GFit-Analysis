import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any;
  isAdmin: boolean = false;
  private timerSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.timerSubscription = timer(0, 1000).subscribe(() => {
      if(localStorage.getItem('user') !== null){
        
        this.user = JSON.parse(localStorage.getItem('user'));

        if(this.user.role === 'admin'){
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }

        this.timerSubscription.unsubscribe();

      }
    });
  }

}
