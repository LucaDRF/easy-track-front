import { inject, Injectable } from '@angular/core';
import axios from 'axios';
import { AuthService } from './auth.service';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private authService = inject(AuthService);

  async loginUser(email: String, password: String) {
    const user = await this.requestLogin(email, password);

    this.setUserInfo(user);

    this.authService.redirectToHomePage();
  }

  async requestLogin(email: String, password: String) {
    const response = await axios.post(`${environment.externalApiUrl}/user/login`, { email, password });
    const body = response.data.body;

    return body;
  }

  setUserInfo(user: any) {
    localStorage.setItem('loggedUserInfo', JSON.stringify(user));
  }
}
