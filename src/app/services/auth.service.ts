import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Keep using compat for AngularFire compatibility
import { Router } from '@angular/router';
import { User } from '@firebase/auth-types'; // Correct user import for Firebase v9+
import { Observable } from 'rxjs';
import { Auth } from 'firebase/auth'; // Import for Auth module in Firebase v9+
import firebase from 'firebase/compat/app';

// This version works for Firebase v9+ using AngularFire compatibility layer
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User | null>; // Use User from @firebase/auth-types for proper typing

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user$ = afAuth.authState; // Firebase auth state observable
  }

  // Check if the user is authenticated
  isAuthenticated(): Observable<boolean> {
    return new Observable((observer) => {
      this.afAuth.authState.subscribe(user => {
        if (user) {
          observer.next(true);  // User is logged in
        } else {
          observer.next(false); // No user is logged in
        }
        observer.complete();
      });
    });
  }

  // Log the user in using Google Auth provider (example)
  loginWithGoogle(): Promise<any> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.signInWithPopup(provider);
  }

  // Log the user out
  logout(): Promise<void> {
    return this.afAuth.signOut();
  }
}
