import { inject, Injectable } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private authService = inject(AuthService);

  async register(user: any) {
    await axios.post(`${environment.externalApiUrl}/user/register`, user);

    this.authService.redirectToLoginPage();
  }
}
