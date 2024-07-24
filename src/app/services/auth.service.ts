import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);

  isLoggedIn() {
    const userInfo = localStorage.getItem('loggedUserInfo') ? JSON.parse(localStorage.getItem('loggedUserInfo')!) : '';

    return !!userInfo;
  }

  redirectToLoginPage() {
    this.router.navigate(['/auth/login']);
  }

  redirectToHomePage() {
    this.router.navigate(['/groups/home']);
  }

  logOut() {
    localStorage.removeItem('loggedUserInfo');

    this.redirectToLoginPage();
  }
}
