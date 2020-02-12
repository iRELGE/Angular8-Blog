import { UserData } from './../models/user-data';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {

  }
  register(user: UserData) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(() => {

      }
      )
  }
  login(user: UserData) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }
  logout() {
    return this.afAuth.auth.signOut();
  }
  userAuthenticated() {
    return this.afAuth.user;
  }
}
