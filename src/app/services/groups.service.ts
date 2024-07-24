import axios from 'axios';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  constructor(
    private router: Router
  ) {}

  async getGroups() {
    const response = await axios.get(`${environment.externalApiUrl}/groups`);
    const body = response.data.body;

    return body.groups;
  }

  async getMyGroups() {
    const userInfo = localStorage.getItem('loggedUserInfo') && JSON.parse(localStorage.getItem('loggedUserInfo')!);
    const response = await axios.get(`${environment.externalApiUrl}/user/groups/${userInfo.id}`);
    const body = response.data.body;

    return body.userGroups;
  }

  async getGroup(id: number) {
    const response = await axios.get(`${environment.externalApiUrl}/groups/${id}`);
    const body = response.data.body;

    return body.group;
  }

  async createGroup(group: any, file: File) {
    const formData = new FormData();

    formData.append('img', file);

    Object.keys(group).forEach(key => {
      formData.append(key, group[key]);
    });

    const userInfo = localStorage.getItem('loggedUserInfo') && JSON.parse(localStorage.getItem('loggedUserInfo')!);

    await axios.post(`${environment.externalApiUrl}/groups/${userInfo.id}`, formData);

    this.router.navigate(['/groups/my-groups']);
  }

  async enterGroup(id: number) {
    const userInfo = localStorage.getItem('loggedUserInfo') && JSON.parse(localStorage.getItem('loggedUserInfo')!);

    await axios.post(`${environment.externalApiUrl}/user/enter/${userInfo.id}/${id}`);
  }

  async exitGroup(id: number) {
    const userInfo = localStorage.getItem('loggedUserInfo') && JSON.parse(localStorage.getItem('loggedUserInfo')!);

    await axios.post(`${environment.externalApiUrl}/user/exit/${userInfo.id}/${id}`);
  }

  async confirmGroup(id: number) {
    const userInfo = localStorage.getItem('loggedUserInfo') && JSON.parse(localStorage.getItem('loggedUserInfo')!);

    await axios.post(`${environment.externalApiUrl}/user/confirm/${userInfo.id}/${id}`);
  }

  async desconfirmGroup(id: number) {
    const userInfo = localStorage.getItem('loggedUserInfo') && JSON.parse(localStorage.getItem('loggedUserInfo')!);

    await axios.post(`${environment.externalApiUrl}/user/desconfirm/${userInfo.id}/${id}`);
  }
}
