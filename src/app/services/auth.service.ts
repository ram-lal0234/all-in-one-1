import { Injectable } from '@angular/core';
import { distinctUntilChanged, from, map, Observable } from 'rxjs';
import { Auth, signInWithPopup, GoogleAuthProvider, signOut, User, authState } from '@angular/fire/auth';
import { onAuthStateChanged } from '@angular/fire/auth';

// This version works for Firebase v9+ using AngularFire compatibility layer
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<User | null>;

  constructor(private auth: Auth) {
    this.user = new Observable((observer) => {
      onAuthStateChanged(this.auth, (user) => {
        observer.next(user);
      });
    });
  }

  // Check if the user is authenticated
  isAuthenticated(): Observable<User | null> {
    return authState(this.auth);
  }

  signInWithGoogle(): Observable<void> {
    const provider = new GoogleAuthProvider();
    const result = signInWithPopup(this.auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });

    return from(result);
  }

  signOut(): Observable<void> {
    const result = signOut(this.auth).then(() => {
      console.log('User signed out');
    });

    return from(result);
  }

  getUser(): Observable<User | null> {
    return this.user;
  }
}
