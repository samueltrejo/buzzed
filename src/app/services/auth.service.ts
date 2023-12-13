import { Injectable, inject } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  user,
  authState,
  idToken,
  signOut
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private router: Router = inject(Router);
  
  public user$ = user(this.auth);

  constructor() {
    // this.user$.subscribe(x => console.log(x));
  }

  byGoogle(): Promise<any> {
    return signInWithRedirect(this.auth, new GoogleAuthProvider());
  }

  signup(email: string, password: string): Promise<any> {
    return createUserWithEmailAndPassword(this.auth, email.trim(), password.trim());
  }

  login(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(this.auth, email.trim(), password.trim());
  }

  logout() {
    return signOut(this.auth).then(() => this.router.navigate(['/']));
  }
}
