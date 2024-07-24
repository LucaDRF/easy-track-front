import { Component, inject, OnInit } from '@angular/core';
import { GroupService } from '../../../services/groups.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private groupService = inject(GroupService);
  private router = inject(Router);

  protected groups: any = [];
  protected loading: boolean = false;

  async ngOnInit() {
    this.loading = true;
    this.groups = await this.groupService.getGroups();
    this.loading = false;
  }

  enterGroupInfo(id: number) {
    localStorage.setItem('groupInfo', JSON.stringify({
      groupId: id
    }));

    this.router.navigate(['groups/group']);
  }
}
