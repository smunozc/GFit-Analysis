import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AngularFireAuth, private router: Router) { }

  user: any;
  credential: any;

  ngOnInit(): void {

  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      (result) => {
        console.log(result);
        this.user = result.user;
        this.credential = result.credential;
      },
      (error) => {
        // The provider's account email, can be used in case of
        // auth/account-exists-with-different-credential to fetch the providers
        // linked to the email:
        let email = error.email;
        // The provider's credential:
        let credential = error.credential;
        // In case of auth/account-exists-with-different-credential error,
        // you can fetch the providers using this:
        if (error.code === 'auth/account-exists-with-different-credential') {
          this.auth.fetchSignInMethodsForEmail(email).then(function (providers) {
            // The returned 'providers' is a list of the available providers
            // linked to the email address. Please refer to the guide for a more
            // complete explanation on how to recover from this error.
          });
        }
      }
    );
    // this.router.navigate(['dashboard']);
  }

  logout() {
    this.auth.signOut();
  }

}
