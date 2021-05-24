import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;
  hasBackend: boolean;
  hasRewards: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    /* Temporal user, final version will take this parameters from the backend and will be able to modify them*/
    if(localStorage.getItem('user') !== null){
      this.user = JSON.parse(localStorage.getItem('user'));
      this.hasBackend = true;
      if(this.user.userRewards.length > 0){
        this.hasRewards = true;
      } else {
        this.hasRewards = false;
      }
    } else {
      this.user = JSON.parse(localStorage.getItem('googleUser'));
      this.hasBackend = false;
    }

  }

  logout(){
    this.authService.logoutUser();
  }

}
