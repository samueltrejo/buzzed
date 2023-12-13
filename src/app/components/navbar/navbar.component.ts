import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="container">
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
        <div class="col-md-3 mb-2 mb-md-0">
          <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
            <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
          </a>
        </div>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 link-blue">Home</a></li>
          <li><a href="#" class="nav-link px-2 link-blue">Features</a></li>
          <li><a href="#" class="nav-link px-2 link-blue">Pricing</a></li>
          <li><a href="#" class="nav-link px-2 link-blue">FAQs</a></li>
          <li><a href="#" class="nav-link px-2 link-blue">About</a></li>
        </ul>

        <div class="col-md-3 text-end">
          <button *ngIf="!authState" type="button" class="btn btn-sm btn-primary me-2" (click)="signInGoogle()">Login</button>
          <button *ngIf="authState" type="button" class="btn btn-sm btn-primary me-2" (click)="logout()">Logout</button>
          <!-- <button type="button" class="btn btn-sm btn-primary">Sign-up</button> -->
        </div>
      </header>
    </div>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  authService: AuthService = inject(AuthService);
  authState: boolean = false;

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      this.authState = user != null;
    })
  }

  signInGoogle() {
    this.authService.byGoogle().catch(error => console.log(error));
  }

  logout() {
    this.authService.logout();
  }
}
