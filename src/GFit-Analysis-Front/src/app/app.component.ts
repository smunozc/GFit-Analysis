import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  title = 'GFit-Analysis-Front';
  isLogged: boolean = false;
  isChecked: boolean = false;

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        console.log("user logged in");
        this.isLogged = true;
      } else {
        console.log("user not logged");
        this.isLogged = false;
        // this.router.navigate(['login']);
      }
      this.isChecked = true;
    });
  }
}
