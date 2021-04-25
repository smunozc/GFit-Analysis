import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  registerUser() { }

  loginGoogle() {
    
    // Use client's device language
    firebase.auth().useDeviceLanguage();

    // Creates the provider object.
    let provider = new firebase.auth.GoogleAuthProvider();
    // Additional scopes for the provider:
    provider.addScope('https://www.googleapis.com/auth/fitness.activity.read');
    provider.addScope('https://www.googleapis.com/auth/fitness.body.read');

    this.afAuth.signInWithPopup(provider).then(
      (result) => {
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('credential', JSON.stringify(result.credential));
        this.router.navigate(['/dashboard']);
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
          this.afAuth.fetchSignInMethodsForEmail(email).then(function (providers) {
            // The returned 'providers' is a list of the available providers
            // linked to the email address. Please refer to the guide for a more
            // complete explanation on how to recover from this error.
          });
        }
      }
    );
  }

  logoutUser() {
    localStorage.clear();
    this.afAuth.signOut();
    this.router.navigate(['/login']);
  }

  isAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }
}
