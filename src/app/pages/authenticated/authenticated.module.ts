import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  CreateGroupsComponent,
  GroupComponent,
  HomeComponent,
  MyGroupsComponent
} from './';

import { AuthGuard } from '../../guards/auth.guard';
import { LoadingComponent, SidebarComponent } from '../../shared';

@NgModule({
  declarations: [
    HomeComponent,
    MyGroupsComponent,
    GroupComponent,
    CreateGroupsComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    LoadingComponent,
    SidebarComponent,
    ReactiveFormsModule
  ],

  providers: [AuthGuard]
})
export class AuthenticatedModule {}
