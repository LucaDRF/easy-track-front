import axios from 'axios';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
  ) {}

  async getUserInfo() {
    const userInfo = localStorage.getItem('loggedUserInfo') && JSON.parse(localStorage.getItem('loggedUserInfo')!);

    const response = await axios.get(`${environment.externalApiUrl}/user/${userInfo.id}`);
    const body = response.data.body;

    return body.userInfo;
  }
}
