import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';


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
        this.router.navigate(['dashboard']);
      } else {
        console.log("user not logged");
        this.router.navigate(['login']);
        this.isLogged = false;
      }
      this.isChecked = true;
    });
  }
}
