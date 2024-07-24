import { Component, inject, OnInit } from '@angular/core';
import { GroupService } from '../../../services/groups.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrl: './group.component.css'
})
export class GroupComponent implements OnInit {
  private groupService = inject(GroupService);
  private router = inject(Router);

  public localStorageInfo: any;
  public info: any;
  public loading: boolean = false;

  async ngOnInit() {
    this.localStorageInfo = JSON.parse(localStorage.getItem('groupInfo')!);

    this.loading = true;

    this.info = await this.groupService.getGroup(this.localStorageInfo.groupId);

    const userInfo = localStorage.getItem('loggedUserInfo') && JSON.parse(localStorage.getItem('loggedUserInfo')!);

    this.loading = false;

    if (!this.info.user_groups || !this.info.user_groups.length) return;

    const hasAss = this.info.user_groups.find((ass: any) => ass.userId === userInfo.id);

    this.info.isIn = !!hasAss;
    this.info.isUserConfirmed = hasAss && hasAss.isConfirmed;

  }


  async enterGroup() {
    this.loading = true;

    await this.groupService.enterGroup(this.info.id);

    location.reload();
  }

  async exitGroup() {
    this.loading = true;

    await this.groupService.exitGroup(this.info.id);

    location.reload();
  }

  async confirmGroup() {
    this.loading = true;

    await this.groupService.confirmGroup(this.info.id);

    location.reload();
  }

  async desconfirmGroup() {
    this.loading = true;

    await this.groupService.desconfirmGroup(this.info.id);

    location.reload();
  }

}
