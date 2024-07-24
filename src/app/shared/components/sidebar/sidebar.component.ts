import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from '../loading/loading.component';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';

type Pages = 'home' | 'my-groups' | 'create-groups';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule, RouterModule, LoadingComponent]
})
export class SidebarComponent implements OnInit {
  protected page: Pages;
  protected isDashboardOpen: Boolean;
  protected loading = false;
  protected userInfo: any;

  constructor(
    protected userService: UserService,
    protected authService: AuthService
  ) {
    this.page = 'home';
    this.isDashboardOpen = false;
  }

  async ngOnInit(): Promise<void> {
    this.loading = true;

    this.userInfo = await this.userService.getUserInfo();

    this.loading = false;
  }

  changePage(page: Pages) {
    // if (!['home', 'my-flashcards', 'my-questions', 'summaries', 'agenda'].includes(page)) {
    //   this.isDashboardOpen = false;
    // }
  }


  logOut() {
    this.authService.logOut();
  }
}
