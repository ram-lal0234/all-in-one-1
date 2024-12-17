import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, UserCredential, User, onAuthStateChanged } from '@angular/fire/auth';
import { Database, get, ref, set } from '@angular/fire/database';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { catchError, switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  private accessTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private auth: Auth, private database: Database) {
    // Initialize user state
    onAuthStateChanged(this.auth, (user) => {
      this.userSubject.next(user);
      if (user) {
        // Re-fetch access token if user is already authenticated
        this.fetchAccessToken(user).subscribe({
          next: (token) => this.accessTokenSubject.next(token),
          error: () => this.accessTokenSubject.next(null),
        });
      } else {
        this.accessTokenSubject.next(null);
      }
    });
  }

  // Observable for user state
  get user$(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  // Observable for access token
  get accessToken$(): Observable<string | null> {
    return this.accessTokenSubject.asObservable();
  }

  // Check if user is authenticated
  isAuthenticated(): Observable<boolean> {
    return this.user$.pipe(map((user) => !!user));
  }

  // Sign in with Google
  signInWithGoogle(): Observable<void> {
    const provider = new GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.com/auth/cloud-platform');
    provider.addScope('https://www.googleapis.com/auth/firebase');
    
    return from(signInWithPopup(this.auth, provider)).pipe(
      switchMap((userCredential) => {
        const credential = GoogleAuthProvider.credentialFromResult(userCredential);
        const accessToken = credential?.accessToken;

        if (accessToken) {
          this.accessTokenSubject.next(accessToken); // Set the access token
        }

        this.userSubject.next(userCredential.user);
        console.log('User signed in:', userCredential.user);
        // Check if organization exists, create if not
        return this.checkAndCreateOrganization(userCredential.user.uid, userCredential.user.displayName || 'Unknown Organization');
      }),
      catchError((error) => {
        console.error('Error during Google Sign-In:', error);
        throw error;
      })
    );
  }

  // Check if the organization exists in Realtime Database
  checkAndCreateOrganization(userId: string, orgName: string): Observable<void> {
    const orgRef = ref(this.database, `organizations/${userId}`); // Use user ID as the key for the organization
    return from(get(orgRef)).pipe(
      switchMap((snapshot) => {
        if (snapshot.exists()) {
          console.log('Organization already exists:', snapshot.val());
          return from([undefined]); // Organization exists, no action needed
        } else {
          // Create the organization in the database if it doesn't exist
          const orgData = {
            orgName,
            createdBy: userId,
            createdAt: new Date().toISOString(),
            // Add any other fields that are relevant for your organization data
          };
          return this.createOrganizationInDatabase(userId, orgData); // Create the new organization
        }
      }),
      catchError((error) => {
        console.error('Error checking or creating organization:', error);
        throw error;
      })
    );
  }

  // Create organization in Realtime Database
  createOrganizationInDatabase(orgId: string, data: any): Observable<void> {
    const orgRef = ref(this.database, `organizations/${orgId}`);
    return from(set(orgRef, data)).pipe(
      catchError((error) => {
        console.error('Error creating organization:', error);
        throw error;
      })
    );
  }

  // Sign out
  signOut(): Observable<void> {
    return from(signOut(this.auth)).pipe(
      switchMap(() => {
        this.userSubject.next(null);
        this.accessTokenSubject.next(null);
        console.log('User signed out');
        return from([undefined]);
      }),
      catchError((error) => {
        console.error('Error signing out:', error);
        throw error;
      })
    );
  }

  // Get access token
  getAccessToken(): Observable<string> {
    return this.accessToken$.pipe(
      switchMap((token) => {
        if (!token) {
          throw new Error('Access token not available. User not signed in.');
        }
        return from([token]);
      })
    );
  }

  // Fetch access token from user credentials
  private fetchAccessToken(user: User): Observable<string | null> {
    // Example placeholder: Implement access token refresh logic here if needed
    return from(user.getIdToken()).pipe(
      map((token) => token || null),
      catchError(() => {
        console.error('Error fetching access token');
        return from([null]);
      })
    );
  }
}
