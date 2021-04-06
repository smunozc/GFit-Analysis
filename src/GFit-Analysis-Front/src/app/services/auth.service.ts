import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  registerUser() { }

  loginGoogle() { }

  logoutUser() { }

  isAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }
}
