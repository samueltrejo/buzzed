import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-landing',
  template: `
    <app-navbar></app-navbar>
    <div class="container">
      <div class="px-4 py-5 my-5 text-center">
        <img src="../../../assets/6.png" height="200px" width="200px" alt="">
        <h1 class="display-5 fw-bold text-blue">Buzzed</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead text-blue mb-4">Welcome to Buzzed, Firm Rock's bible trivia buzzer app. Please choose an option below.</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center flex-column">
            <button *ngIf="authState" type="button" class="btn btn-primary btn-lg px-4 gap-3">
              <a routerLink="/create" class="nav-link">Create Group</a>
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              <a routerLink="/join" class="nav-link">Join Group</a>
            </button>
            <small></small>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  localstorageService: LocalstorageService = inject(LocalstorageService);
  authService: AuthService = inject(AuthService);
  authState: boolean = false;

  ngOnInit(): void {
    const token = this.localstorageService.getToken();
    this.authService.user$.subscribe(user => {
      this.authState = user != null;
    });
  }
}
