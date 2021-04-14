import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    let homeButton = document.getElementById("home-button");
    let profileButton = document.getElementById("profile-button");
    let scoreboardButton = document.getElementById("scoreboard-button");

    if(this.router.url === "/dashboard"){

      homeButton.className = "selected";
      profileButton.className = "";
      scoreboardButton.className = "";

    } else if(this.router.url === "/profile"){

      homeButton.className = "";
      profileButton.className = "selected";
      scoreboardButton.className = "";

    } else if(this.router.url === "/scoreboard"){

      homeButton.className = "";
      profileButton.className = "";
      scoreboardButton.className = "selected";

    }
  }

}
