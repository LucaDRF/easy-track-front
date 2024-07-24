import { Component, inject } from '@angular/core';
import { GroupService } from '../../../services/groups.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrl: './my-groups.component.css'
})
export class MyGroupsComponent {
  private groupService = inject(GroupService);
  private router = inject(Router);

  protected groups: any = [];
  protected loading: boolean = false;

  async ngOnInit() {
    this.loading = true;
    this.groups = await this.groupService.getMyGroups();
    this.loading = false;
  }

  enterGroupInfo(id: number) {
    localStorage.setItem('groupInfo', JSON.stringify({
      groupId: id
    }));

    this.router.navigate(['groups/group']);
  }
}
