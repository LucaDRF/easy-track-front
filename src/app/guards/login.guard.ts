import { inject, Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  private authService = inject(AuthService);

  canActivate() {
    const isLoggedIn = this.authService.isLoggedIn();

    if (isLoggedIn) {
      this.authService.redirectToHomePage();
    }

    return !isLoggedIn;
  }
}
