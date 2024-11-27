import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    routes,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, // For authentication
    AngularFireDatabaseModule // For Realtime Database
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
