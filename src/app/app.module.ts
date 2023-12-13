import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { CreategroupComponent } from './components/creategroup/creategroup.component';
import { JoingroupComponent } from './components/joingroup/joingroup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CreategroupComponent,
    JoingroupComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"buzzed-66c3a","appId":"1:702547858601:web:f93f498d905c1bd67845b8","storageBucket":"buzzed-66c3a.appspot.com","apiKey":"AIzaSyCPlri4CiagTrnxhqzt2tGBIV-mTPJheoA","authDomain":"buzzed-66c3a.firebaseapp.com","messagingSenderId":"702547858601","measurementId":"G-B9Y3PNB7CZ"})),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
